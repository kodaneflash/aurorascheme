import { Trans } from '@kit/ui/trans';

import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export const generateMetadata = async () => {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:caseStudies'),
  };
};

async function CaseStudiesPage() {
  const { t } = await createI18nServerInstance();

  return (
    <div className={'flex flex-col space-y-4 xl:space-y-8'}>
      <SitePageHeader
        title={t('marketing:caseStudies')}
        subtitle={t('marketing:caseStudiesSubtitle')}
      />

      <div className={'container flex flex-col space-y-8 pb-16'}>
        {/* Add content here */}
      </div>
    </div>
  );
}

export default withI18n(CaseStudiesPage);