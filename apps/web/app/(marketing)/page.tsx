import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Sparkle } from 'lucide-react';

import { Heading } from '@kit/ui/heading';

import billingConfig from '~/config/billing.config';
import pathsConfig from '~/config/paths.config';
import { withI18n } from '~/lib/i18n/with-i18n';
import { Hero } from './_components/Hero';

// Dynamically import non-critical components
const PricingTable = dynamic(
  () => import('@kit/billing-gateway/marketing').then(mod => mod.PricingTable),
  { ssr: true, loading: () => <PricingTableSkeleton /> }
);

function Home() {
  return (
    <div className={'mt-2 flex flex-col py-8'}>
      <div className={'container mx-auto flex flex-col space-y-24 sm:space-y-32'}>
        <Hero />

        {/* Pricing Section - Deferred loading */}
        <Suspense fallback={<PricingSectionSkeleton />}>
          <section className={'container mx-auto mt-24'}>
            <div className={'flex flex-col items-center justify-center space-y-16 py-16'}>
              <div className={'flex flex-col items-center space-y-8 text-center'}>
                <Pill>Proident deserunt mollit aliquip commodo duis.</Pill>

                <div className={'flex flex-col space-y-2'}>
                  <Heading level={1} className="text-foreground">
                    Pay once. Access forever.
                  </Heading>

                  <Heading level={2} className={'font-sans font-normal text-muted-foreground'}>
                    Get started on our free plan and upgrade when you are ready.
                  </Heading>
                </div>
              </div>

              <div className={'w-full'}>
                <PricingTable
                  config={billingConfig}
                  paths={{
                    signUp: pathsConfig.auth.signUp,
                    return: pathsConfig.app.home,
                  }}
                />
              </div>
            </div>
          </section>
        </Suspense>
      </div>
    </div>
  );
}

// Skeleton components for better loading UX
function PricingTableSkeleton() {
  return (
    <div className="w-full h-[600px] animate-pulse bg-muted rounded-lg" />
  );
}

function SubscriptionFormSkeleton() {
  return (
    <div className="w-full max-w-md h-[100px] animate-pulse bg-muted rounded-lg" />
  );
}

function PricingSectionSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="h-8 w-64 mx-auto bg-muted animate-pulse rounded" />
      <div className="h-[400px] w-full bg-muted animate-pulse rounded-lg" />
    </div>
  );
}

function Pill(props: React.PropsWithChildren) {
  return (
    <h2 className={'flex items-center space-x-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 px-4 py-2 text-center text-sm text-gray-700 shadow dark:text-gray-200 dark:shadow-primary/20'}>
      <Sparkle className={'inline-block h-4 text-gray-400'} />
      <span>{props.children}</span>
    </h2>
  );
}

export default withI18n(Home);


