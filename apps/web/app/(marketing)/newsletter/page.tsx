import { Trans } from '@kit/ui/trans';
import { NewsletterSignup } from '~/(marketing)/NewsletterSignup';
import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export const generateMetadata = async () => {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:joinNewsletter'),
    description: t('marketing:joinNewsletterDescription'),
  };
};

async function NewsletterPage() {
  const { t } = await createI18nServerInstance();

  return (
    <div className="flex flex-col space-y-4 xl:space-y-8">
      <SitePageHeader
        title={t('marketing:joinNewsletter')}
        subtitle={t('marketing:joinNewsletterDescription')}
      />

      <div className="container mx-auto py-16">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xl mb-8 text-muted-foreground">
            <Trans
              i18nKey="marketing:newsletterContent"
            />
          </p>
          
          <div className="bg-card shadow-lg rounded-lg p-8 border border-primary/10">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withI18n(NewsletterPage);
