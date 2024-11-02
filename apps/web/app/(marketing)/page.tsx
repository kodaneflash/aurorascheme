import Image from 'next/image';
import Link from 'next/link';
import Script from "next/script";

import {
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  Lock,
  Sparkle,
  User,
  Users,
  Check, 
  ChevronDown,
  ArrowRight,
  // Add these new imports for the feature icons
  Zap,
  TrendingUp,
  BarChart,
  PieChart
} from 'lucide-react';

import { PricingTable } from '@kit/billing-gateway/marketing';
import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';
import { Trans } from '@kit/ui/trans';
import { cn } from '@kit/ui/utils';
import { NewsletterSignup } from './NewsletterSignup';

import billingConfig from '~/config/billing.config';
import pathsConfig from '~/config/paths.config';
import { withI18n } from '~/lib/i18n/with-i18n';


function FeatureIcon(
  { className, children }: React.PropsWithChildren<{
    className?: string;
  }>
) {
  return (
    <div className={'flex'}>
      <div
        className={`rounded-xl bg-primary-500/10 p-4 dark:bg-primary-500/10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-card p-8 sm:p-10 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-700 dark:text-gray-300">
            Your Fast Track to Solopreneurship <span className="text-primary">Profitability</span>
          </Heading>
          <Heading level={2} className="text-xl sm:text-2xl font-normal text-muted-foreground">
            Unlock premium resources to launch a profitable one-person online business and become profitable.
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem
            icon={<Zap className="h-6 w-6" />}
            title="1000+ Profitable Online Business Ideas"
            description="Explore our curated database of over 1000 market validated and profitable business ideas."
            iconClassName="bg-emerald-50 text-emerald-500 dark:bg-emerald-500/5"
          />
          <FeatureItem
            icon={<LayoutDashboard className="h-6 w-6" />}
            title="B2B Businesss Ideas"
            description="Discover impactful B2B ideas that address real-world online challenges and drive growth for businesses,"
            iconClassName="bg-blue-50 text-blue-500 dark:bg-blue-500/5"
          />
          <FeatureItem
            icon={<TrendingUp className="h-6 w-6" />}
            title="Solopreneur Trends"
            description="Stay up-to-date with insights and strategies on the latest trends and profitable online business models for solopreneurs."
            iconClassName="bg-red-50 text-red-500 dark:bg-red-500/5"
          />
          <FeatureItem
            icon={<Users className="h-6 w-6" />}
            title="Premium Community"
            description="Join a community of founders, entrepreneurs, and experts to find support, collaboration, and inspiration for your solopreneur journey."
            iconClassName="bg-purple-50 text-purple-500 dark:bg-purple-500/5"
          />
          <FeatureItem
            icon={<BarChart className="h-6 w-6" />}
            title="Revenue Data of Successful Online Businesses"
            description="Explore revenue data from successful online businesses to fuel and inspire your own profitable venture."
            iconClassName="bg-yellow-50 text-yellow-500 dark:bg-yellow-500/5"
          />
          <FeatureItem
            icon={<PieChart className="h-6 w-6" />}
            title="Cost Analysis"
            description="Gain insights into the costs of running an online business, helping you optimize expenses and make informed decisions."
            iconClassName="bg-pink-50 text-pink-500 dark:bg-pink-500/5"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconClassName: string;
}

function FeatureItem({ icon, title, description, iconClassName }: FeatureItemProps) {
  return (
    <div className={'flex flex-col space-y-4'}>
      <FeatureIcon className={iconClassName}>
        {icon}
      </FeatureIcon>

      <Heading level={3}>
        <span>{title}</span>
      </Heading>

      <div className={'text-lg text-muted-foreground'}>
        {description}
      </div>
    </div>
  );
}

function FAQSection() {
  const faqItems = [
    {
      question: `Do you offer a free trial?`,
      answer: `Yes, we offer a 14-day free trial. You can cancel at any time during the trial period and you won't be charged.`,
    },
    {
      question: `Can I cancel my subscription?`,
      answer: `You can cancel your subscription at any time. You can do this from your account settings.`,
    },
    {
      question: `Where can I find my invoices?`,
      answer: `You can find your invoices in your account settings.`,
    },
    {
      question: `What payment methods do you accept?`,
      answer: `We accept all major credit cards and PayPal.`,
    },
    {
      question: `Can I upgrade or downgrade my plan?`,
      answer: `Yes, you can upgrade or downgrade your plan at any time. You can do this from your account settings.`,
    },
    {
      question: `Do you offer discounts for non-profits?`,
      answer: `Yes, we offer a 50% discount for non-profits. Please contact us to learn more.`,
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center space-y-8 px-4 lg:px-0">
        <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Frequently Asked <span className="text-primary">Questions</span>
        </Heading>
        
        <div className="w-full max-w-xl flex flex-col">
          {faqItems.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>

        <div>
          <Button asChild variant={'outline'}>
            <Link href={'/contact'}>
              <span>
                <Trans i18nKey={'marketing:contactFaq'} />
              </span>

              <ArrowRight className={'ml-2 w-4'} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  item,
}: React.PropsWithChildren<{
  item: {
    question: string;
    answer: string;
  };
}>) {
  return (
    <details className={'group border-b px-2 py-4 last:border-b-transparent'}>
      <summary
        className={
          'flex items-center justify-between hover:cursor-pointer hover:underline'
        }
      >
        <h2
          className={
            'hover:underline-none cursor-pointer font-sans font-medium'
          }
        >
          <Trans i18nKey={item.question} defaults={item.question} />
        </h2>

        <div>
          <ChevronDown
            className={'h-5 transition duration-300 group-open:-rotate-180'}
          />
        </div>
      </summary>

      <div className={'flex flex-col space-y-2 py-1 text-muted-foreground'}>
        <Trans i18nKey={item.answer} defaults={item.answer} />
      </div>
    </details>
  );
}

function Home() {
  return (
    <div className={'mt-4 flex flex-col space-y-24 py-16'}>
      <div className={'container mx-auto flex flex-col space-y-20'}>
        <div
          className={
            'flex flex-col items-center md:flex-row' +
            ' mx-auto flex-1 justify-center animate-in fade-in' +
            ' duration-500 zoom-in-95 slide-in-from-top-24'
          }
        >
          <div
            className={
              'flex w-full flex-1 flex-col items-center space-y-8 xl:space-y-12 2xl:space-y-14'
            }
          >
            <Pill>
              <span>For creators and solopreneurs</span>
            </Pill>

            <div className={'flex flex-col items-center space-y-8'}>
              <HeroTitle>
                <span>Build Your </span>

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
                  <span>Internet Empire.</span>
                </span>
              </HeroTitle>

              {/* Added content */}
              <div className={'flex flex-col space-y-4 max-w-3xl mx-auto'}>
                <Heading
                  level={2}
                  className={
                    'p-0 text-center font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-foreground'
                  }
                >
                  The complete blueprint for building profitable <span className="font-semibold">one-person online businesses</span>. Access premium resources, expert-led courses, and weekly validated profitable business ideas to <span className="font-semibold">build</span>, <span className="font-semibold">launch</span> and <span className="font-semibold">scale.</span>
                </Heading>
                <Heading
                  level={2}
                  className={
                    'p-0 text-center font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-foreground'
                  }
                >
                  Launch your online empire today.
                </Heading>
              </div>

              <MainCallToActionButton />
            </div>
          </div>
        </div>

        <NewsletterSignup />

        <div
          className={
            'mx-auto flex max-w-6xl justify-center py-12 animate-in fade-in ' +
            ' delay-300 duration-1000 slide-in-from-top-16 fill-mode-both'
          }
        >
          <Image
            priority
            className={
              'delay-250 rounded-lg border duration-1000 ease-out animate-in fade-in zoom-in-50 fill-mode-both'
            }
            width={1689}
            height={1057}
            src={`/images/dashboard.webp`}
            alt={`App Image`}
          />
        </div>

        {/* New section */}
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-12">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left text-foreground">
                Everything we know about building <span className="text-primary">one-person profitable businesses</span> on the internet.
              </Heading>
            </div>
            
            <div className="lg:w-1/2">
              <p className="text-lg md:text-xl text-muted-foreground text-center lg:text-left leading-relaxed">
              FounderSolo provides everything you need to launch and scale a profitable one-person business. From courses like the Solopreneur MBA to in-depth reports on emerging online business trends and deep dives into successful online business models, you&apos;ll have everything to confidently build and grow your own successful venture.

              </p>
            </div>
          </div>
        </div>

        <div className={'container mx-auto'}>
          <div
            className={'flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36'}
          >
            {/* New duplicated section */}
            <FeatureShowcaseContainer>
              <FeatureContainer>
                <div className={'flex flex-col space-y-6'}>
                  <IconContainer className={'bg-blue-50 dark:bg-blue-500/10'}>
                    <TrendingUp className={'h-5 text-blue-500'} />
                  </IconContainer>

                  <div className={'flex flex-col'}>
                    <Heading level={2}>Business Breakdowns</Heading>

                    <Heading
                      level={3}
                      className={'font-sans font-normal text-muted-foreground'}
                    >
                      Breakdowns of digital products and business models making millions.

                    </Heading>
                  </div>
                </div>

                <div>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li className="text-sm sm:text-base">
                      <strong>Actionable Research:</strong>  Discover strategies behind top digital products and trends.and online business trends.
                    </li>
                    <li className="text-sm sm:text-base">
                      <strong>Data-Packed Reports:</strong> Exclusive insights on how profitable products are built, priced, and sold, with downloadable data.
                    </li>
                    <li className="text-sm sm:text-base">
                      <strong>Step-by-Step Breakdown:</strong> Understand what sets these products apart and apply the lessons to your own business.
                    </li>
                  </ul>
                </div>
              </FeatureContainer>

              <FeatureContainer>
                <Image
                  className="rounded-2xl"
                  src={'/images/deepdivepost.webp'}
                  width={'1916'}
                  height={'1392'}
                  alt={'Trends and Startup Ideas'}
                />
              </FeatureContainer>
            </FeatureShowcaseContainer>

            <FeatureShowcaseContainer>
              <FeatureContainer>
                <div className={'flex flex-col space-y-6'}>
                  <IconContainer className={'bg-green-50 dark:bg-green-500/10'}>
                    <Lock className={'h-5 text-green-500'} />
                  </IconContainer>

                  <div className={'flex flex-col'}>
                    <Heading level={2}>Interviews, Insights & Reports</Heading>

                    <Heading
                      level={3}
                      className={'font-sans font-normal text-muted-foreground'}
                    >
                     Exclusive reports and in-depth insights to fuel your solopreneur journey.

                    </Heading>
                  </div>
                </div>

                <div>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li className="text-sm sm:text-base">
                      <strong>Actionable Insights:</strong> Explore validated business ideas, deep dives into emerging trends, and case studies from successful founders.
                    </li>
                    <li className="text-sm sm:text-base">
                      <strong>Data-Driven Reports:</strong> Access detailed breakdowns of market opportunities and business strategies.
                    </li>
                    <li className="text-sm sm:text-base">
                      <strong>Founder Case Studies:</strong> Unlock the secrets to 7-figure online businesses with in-depth founder interviews.
                    </li>
                  </ul>
                </div>
              </FeatureContainer>

              <FeatureContainer>
                <Image
                  className="rounded-2xl"
                  src={'/images/exclusivereports.webp'}
                  width={'1760'}
                  height={'1680'}
                  alt={'Sign In'}
                />
              </FeatureContainer>
            </FeatureShowcaseContainer>

            <FeatureShowcaseContainer>
              <FeatureContainer>
                <div className={'flex flex-col space-y-6'}>
                  <IconContainer className={'bg-blue-50 dark:bg-blue-500/10'}>
                    <CreditCard className={'h-5 text-blue-500'} />
                  </IconContainer>

                  <div className={'flex flex-col'}>
                    <Heading level={2}>Peer Groups & Community</Heading>

                    <Heading
                      level={3}
                      className={'font-sans font-normal text-muted-foreground'}
                    >
                    Build Together. Win Together.
                    </Heading>
                  </div>
                </div>

                <div>
                Collaborate with other solopreneurs to brainstorm creative strategies and craft lasting connections.
                </div>
              </FeatureContainer>

              <FeatureContainer>
                <Image
                  className="rounded-2xl"
                  src={'/images/binstorrestrend.webp'}
                  width={'1916'}
                  height={'1392'}
                  alt={'Billing'}
                />
              </FeatureContainer>
            </FeatureShowcaseContainer>
          </div>
        </div>

        {/* Add the Senja widget here, directly below the FeatureShowcaseContainer */}
        <div 
          className="senja-embed" 
          data-id="50c3253b-f0f6-4dc1-8101-1f29a1fab06c" 
          data-mode="shadow" 
          data-lazyload="false" 
          style={{ display: "block" }}
        ></div>

        <FeaturesList />

        {/* New section replicating the image content (About section) */}
        <AboutSection />

        {/* New section */}
        <Attention />

        <div className={'container mx-auto'}>
          <div
            className={
              'flex flex-col items-center justify-center space-y-16 py-16'
            }
          >
            <div className={'flex flex-col items-center space-y-8 text-center'}>
              <Pill>Proident deserunt mollit aliquip commodo duis.</Pill>

              <div className={'flex flex-col space-y-2'}>
                <Heading level={1} className="text-foreground">Pay <span className="text-primary">once</span>. Access <span className="text-primary">forever</span>.</Heading>

                <Heading
                  level={2}
                  className={'font-sans font-normal text-muted-foreground'}
                >
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

    {/* Newsletter Signup Section */}
    <NewsletterSignup />


        {/* Add the FAQ section here */}
        <FAQSection />


        {/* Place the Script component at the end of your JSX */}
        <Script
          src="https://widget.senja.io/widget/50c3253b-f0f6-4dc1-8101-1f29a1fab06c/platform.js"
          type="text/javascript"
          async
        />
      </div>
    </div>
  );
}

export default withI18n(Home);

function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        'flex flex-col text-center font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl'
      }
    >
      <span>Build Your </span>

      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
        <span>Internet Empire.</span>
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
function FeatureShowcaseContainer(props: React.PropsWithChildren) {
  return (
    <div
      className={
        'flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0' +
        ' lg:space-x-24'
      }
    >
      {props.children}
    </div>
  );
}

function FeatureContainer(
  props: React.PropsWithChildren<{
    className?: string;
    reverse?: boolean;
  }>,
) {
  return (
    <div
      className={cn('flex w-full flex-col space-y-6 lg:w-6/12', {
        'order-2 mt-8 lg:order-none lg:mt-0': props.reverse,
      })}
    >
      {props.children}
    </div>
  );
}


function MainCallToActionButton() {
  return (
    <div className={'flex'}>
      <Button asChild>
        <Link href="https://pro.foundersolo.co/checkout/premium">
          <span className={'flex items-center space-x-0.5'}>
            <span>
              <Trans i18nKey={'common:joinCommunity'} />
            </span>

            <ChevronRight
              className={
                'h-4 animate-in fade-in slide-in-from-left-8' +
                ' delay-800 duration-1000 zoom-in fill-mode-both'
              }
            />
          </span>
        </Link>
      </Button>
    </div>
  );
}
function IconContainer(
  props: React.PropsWithChildren<{
    className?: string;
  }>,
) {
  return (
    <div className={'flex'}>
      <span
        className={cn(
          'flex items-center justify-center rounded-lg p-3',
          props.className,
        )}
      >
        {props.children}
      </span>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
        <Heading level={2} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
          The future of business building.
        </Heading>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            Do you ever feel overwhelmed by the sheer amount of information and steps required to start an online business?
          </p>
          <p>
            Not long ago, entrepreneurship meant developing a moonshot idea, raising
            venture capital and chasing unicorn valuations. You would have an idea, plead
            investors for money to build it. And then hope and pray you found product
            market fit.
          </p>
          <p>We&apos;ve entered a new era of entrepreneurship.</p>
          <p>
            This is the most exciting era to be an entrepreneur. You can now leverage an
            internet audience to build a community of like-minded individuals, and create
            products you know they&apos;ll love.
          </p>
          <p>
            In the new era, the entreprenuer controls their destiny, profits, and products.
          </p>
          <p>A new era requires a new roadmap.</p>
          <p>
            FounderSolo is the result of 10+ years of expertise, proven online  business strategies that actually drive growth
            and  proven techniques that have been tested and refined, so you know you&apos;re using methods that work to arm you to build your online empire.
          </p>
          <p>
            And all the tools, trainings and feedback you need to build your internet
            business. There is no reason to do it alone.
          </p>
          <p>No one has put it all together like this before &mdash; until now.</p>
          <p>It&apos;s time to build your empire.</p>
          <p>Are you ready?</p>
        </div>
        <div className="mt-8">
          <Heading level={3} className="text-2xl sm:text-3xl font-bold text-foreground">
            This is more than a community or course.
          </Heading>
          <Heading level={3} className="text-2xl sm:text-3xl font-bold text-foreground">
            This is a membership.
          </Heading>
        </div>
      </div>
    </div>
  );
}

function Attention() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-card rounded-lg shadow-lg max-w-6xl mx-auto p-6 sm:p-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 text-left">
            <Heading level={2} className="text-4xl font-bold mb-6 text-foreground">
              Hey, it&apos;s James <span className="inline-block animate-wave">👋</span>
            </Heading>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>Since 2016, I&apos;ve been tinkering with small projects, all with the goal of <span className="font-semibold">hitting my first million</span>.</p>
              <p>Over 95% of the products I made didn&apos;t make a single cent, until I realized one thing..</p>
              <p>Thinking about the &quot;perfect idea&quot; doesn&apos;t work.</p>
              <p>After wasting years building startups with zero users, I changed my entire approach.</p>
              <p>Instead of thinking of ideas in the shower... I started digging for <span className="font-semibold">problems</span> that people are <span className="font-semibold italic">ALREADY</span> paying for.</p>
              <p>It worked.</p>
              <p>The past 3 years, I launched 6 products and made over $1.2 million (2 were acquired!)</p>
              <p>and then...</p>
              <p>I realized other entrepreneurs have the <span className="font-semibold">same problem</span> of building things that don&apos;t sell.</p>
              <p>FounderSolo is for the solopreneurs that are tired of building online businesses that don&apos;t make any money.</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <Image
              src="/images/trophy.webp"
              alt="Trophy illustration"
              width={500}
              height={500}
              className="w-full max-w-[500px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

