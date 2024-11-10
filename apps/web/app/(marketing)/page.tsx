import { Sparkle } from 'lucide-react';

import { PricingTable } from '@kit/billing-gateway/marketing';
import { Heading } from '@kit/ui/heading';
import { cn } from '@kit/ui/utils';

import { AppleCardsCarouselDemo } from '@kit/ui/apple-cards-carousel-demo';

import billingConfig from '~/config/billing.config';
import pathsConfig from '~/config/paths.config';
import { withI18n } from '~/lib/i18n/with-i18n';
import { SubscriptionForm } from './_components/SubscriptionForm';

function Home() {
  return (
    <div className={'mt-4 flex flex-col py-16'}>
      <div className={'container mx-auto flex flex-col space-y-48'}>
        <div className={'relative flex flex-col items-center md:flex-row mx-auto flex-1 justify-center animate-in fade-in duration-500 zoom-in-95 slide-in-from-top-24'}>
          <div className={'flex w-full flex-1 flex-col items-center space-y-8 xl:space-y-12 2xl:space-y-14'}>
            <Pill>
              <span>For creators and solopreneurs</span>
            </Pill>

            <div className={'flex flex-col items-center space-y-8'}>
              <HeroTitle />
              
              <div className="flex flex-col space-y-2">
                <p className="text-muted-foreground text-center max-w-2xl">
                  Join 60,000+ solopreneurs building profitable online businesses. Get weekly case studies, expert interviews, and actionable tips to help you earn more.
                </p>
                <p className="text-muted-foreground text-center max-w-2xl">
                  Launch your online empire today.
                </p>
              </div>

              <div className="w-full max-w-md mx-auto">
                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>

        {/* FeatureTabs section */}
        <div className="animate-in fade-in delay-200 duration-1000 slide-in-from-top-16 fill-mode-both">
          <FeatureTabs />
        </div>

        {/* Carousel Section */}
        <div className="w-full my-24">
          <AppleCardsCarouselDemo />
        </div>

        {/* Pricing Section */}
        <div className={'container mx-auto mt-24'}>
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
        </div>
      </div>
    </div>
  );
}

export default withI18n(Home);

function HeroTitle() {
  return (
    <h1 className="max-w-xs text-center text-4xl font-[900] font-heading leading-[1] tracking-tight sm:max-w-xl sm:text-5xl sm:leading-none md:max-w-2xl md:text-6xl lg:text-[4.25rem]">
      <span className="text-glow">Build a cash-flowing internet</span>{" "}
      <span className="inline-grid w-full">
        <span className="text-gradient col-start-1 row-start-1 animate-business-empire-glow blur-xl">
          business empire
        </span>
        <span className="text-gradient col-start-1 row-start-1">
          business empire
        </span>
      </span>
    </h1>
  );
}

function Pill(props: React.PropsWithChildren) {
  return (
    <h2
      className={
        'flex items-center space-x-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 px-4 py-2 text-center text-sm text-gray-700 shadow dark:text-gray-200 dark:shadow-primary/20'
      }
    >
      <Sparkle className={'inline-block h-4 text-gray-400'} />
      <span>{props.children}</span>
    </h2>
  );
}

