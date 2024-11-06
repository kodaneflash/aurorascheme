'use client';

import { Hero } from '@kit/ui/hero2';
import { SitePageHeader } from '~/(marketing)/_components/site-page-header';

export default function NewsletterPage() {
  return (
    <div>
      <SitePageHeader
        title="Newsletter"
        subtitle="Join our community of entrepreneurs"
      />
      <Hero />
    </div>
  );
}
