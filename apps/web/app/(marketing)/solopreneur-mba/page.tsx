import { Trans } from '@kit/ui/trans';

import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export const generateMetadata = async () => {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:solopreneurMBA'),
    description: t('marketing:solopreneurMBADescription'),
  };
};

async function SolopreneurMBAPage() {
  const { t } = await createI18nServerInstance();

  return (
    <div className="flex flex-col space-y-4 xl:space-y-8">
      <SitePageHeader
        title={t('marketing:solopreneurMBA')}
        subtitle={t('marketing:solopreneurMBADescription')}
      />

      <div className="container mx-auto py-16">
        <p className="mt-4">
          <Trans
            i18nKey="marketing:solopreneurMBAContent"
            defaults="Content for SolopreneurMBA will be added here."
          />
        </p>
        {/* Additional SolopreneurMBA content can be added here */}
      </div>
    </div>
  );
}

export default withI18n(SolopreneurMBAPage);
