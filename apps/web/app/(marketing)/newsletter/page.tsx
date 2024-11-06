import { withI18n } from '~/lib/i18n/with-i18n';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';

export const generateMetadata = async () => {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:joinNewsletter'),
    description: t('marketing:joinNewsletterDescription'),
  };
};

async function NewsletterPage() {
  return (
    <div>
      {/* Page content goes here */}
    </div>
  );
}

export default withI18n(NewsletterPage);
