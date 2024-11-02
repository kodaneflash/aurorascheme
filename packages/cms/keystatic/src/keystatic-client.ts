import Markdoc from '@markdoc/markdoc';

import { Cms, CmsClient } from '@kit/cms';

import { createKeystaticReader } from './create-reader';
import { PostEntryProps } from './keystatic.config';

export function createKeystaticClient() {
  return new KeystaticClient();
}

class KeystaticClient implements CmsClient {
  async getContentItems(options: Cms.GetContentItemsOptions) {
    const reader = await createKeystaticReader();
    console.log('Creating Keystatic reader');

    const collection = options.collection as keyof (typeof reader)['collections'];

    if (!reader.collections[collection]) {
      throw new Error(`Collection ${collection} not found`);
    }

    const docs = await reader.collections[collection].all();
    console.log(`All ${collection} items:`, docs.map(d => d.slug));

    const startOffset = options?.offset ?? 0;
    const endOffset = startOffset + (options?.limit ?? 10);

    const filtered = docs.filter((item) => {
      console.log(`Filtering item: ${item.slug}`);

      const categoryMatch = options?.categories?.length
        ? options.categories.some((category) =>
            item.entry.categories?.includes(category)
          )
        : true;
      console.log(`Category match for ${item.slug}:`, categoryMatch);

      // Remove or adjust language filtering as needed
      const languageMatch = true; // Ignore language filtering
      console.log(`Language match for ${item.slug}:`, languageMatch);

      const tagMatch = options?.tags?.length
        ? options.tags.some((tag) => item.entry.tags?.includes(tag))
        : true;
      console.log(`Tag match for ${item.slug}:`, tagMatch);

      const result = categoryMatch && languageMatch && tagMatch;
      console.log(`Final filter result for ${item.slug}:`, result);
      return result;
    });

    console.log('Filtered items:', filtered.map(f => f.slug));

    const sorted = filtered.sort((a, b) => {
      const direction = options.sortDirection ?? 'asc';
      const sortBy = options.sortBy ?? 'publishedAt';

      const transform = (value: string | number | undefined | null) => {
        if (typeof value === 'string') {
          return new Date(value).getTime();
        }
        return value ?? 0;
      };

      const left = transform(a.entry[sortBy]);
      const right = transform(b.entry[sortBy]);

      console.log(`Sorting ${a.slug} vs ${b.slug}:`, { left, right, direction });

      if (direction === 'asc') {
        return left - right;
      }
      return right - left;
    });

    console.log('Sorted items:', sorted.map(s => s.slug));

    const items = await Promise.all(
      sorted.slice(startOffset, endOffset).map(async (item) => {
        const children = docs.filter((doc) => doc.entry.parent === item.slug);
        return this.mapPost(item, children);
      })
    );

    console.log('Final items:', items.map(i => i.slug));

    return {
      total: filtered.length,
      items,
    };
  }

  async getContentItemBySlug(params: { slug: string; collection: string }) {
    const reader = await createKeystaticReader();

    const collection =
      params.collection as keyof (typeof reader)['collections'];

    if (!reader.collections[collection]) {
      throw new Error(`Collection ${collection} not found`);
    }

    const doc = await reader.collections[collection].read(params.slug);

    if (!doc) {
      return Promise.resolve(undefined);
    }

    const allPosts = await reader.collections[collection].all();

    const children = allPosts.filter(
      (item) => item.entry.parent === params.slug,
    );

    return this.mapPost({ entry: doc, slug: params.slug }, children);
  }

  async getCategories() {
    return Promise.resolve([]);
  }

  async getTags() {
    return Promise.resolve([]);
  }

  async getTagBySlug() {
    return Promise.resolve(undefined);
  }

  async getCategoryBySlug() {
    return Promise.resolve(undefined);
  }

  private async mapPost<
    Type extends {
      entry: PostEntryProps;
      slug: string;
    },
  >(item: Type, children: Type[] = []): Promise<Cms.ContentItem> {
    const publishedAt = item.entry.publishedAt
      ? new Date(item.entry.publishedAt)
      : new Date();

    const markdoc = await item.entry.content();
    const content = Markdoc.transform(markdoc.node);
    const html = Markdoc.renderers.html(content);

    return {
      id: item.slug,
      title: item.entry.title,
      url: item.slug,
      slug: item.slug,
      description: item.entry.description,
      publishedAt: publishedAt.toISOString(),
      content: html,
      image: item.entry.image ?? undefined,
      categories:
        item.entry.categories.map((item) => {
          return {
            id: item,
            name: item,
            slug: item,
          };
        }) ?? [],
      tags: item.entry.tags.map((item) => {
        return {
          id: item,
          name: item,
          slug: item,
        };
      }),
      parentId: item.entry.parent ?? undefined,
      order: item.entry.order ?? 1,
      children: await Promise.all(
        children.map(async (child) => this.mapPost(child, [])),
      ),
    };
  }
}