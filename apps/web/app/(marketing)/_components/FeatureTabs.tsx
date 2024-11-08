"use client";

import Image from "next/image";
import { Tabs } from '@kit/ui/animated-tabs';
import { FlipWords } from '@kit/ui/aceternity/flip-words';

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
        <Image
          src="/linear.webp"
          alt="Linear app screenshot"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
        <Image
          src="/linear.webp"
          alt="Linear app screenshot"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Playground tab</p>
        <Image
          src="/linear.webp"
          alt="Linear app screenshot"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Content tab</p>
        <Image
          src="/linear.webp"
          alt="Linear app screenshot"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Random tab</p>
        <Image
          src="/linear.webp"
          alt="Linear app screenshot"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
];

export function FeatureTabs() {
  return (
    <div className="flex flex-col items-center space-y-16 max-w-5xl mx-auto w-full pt-48">
      <div className="text-center space-y-8">
        <div className="text-4xl sm:text-5xl lg:text-6xl mx-auto font-heading font-semibold text-foreground">
          <span className="inline-flex flex-wrap justify-center items-center gap-x-2">
            Build{' '}
            <FlipWords 
              words={["better", "modern", "beautiful", "powerful"]} 
              className="text-primary font-bold"
              duration={2500}
            />{' '}
          </span>
          <span className="text-muted-foreground font-normal text-2xl sm:text-3xl lg:text-4xl block mt-4">
            websites with Aceternity UI
          </span>
        </div>
        
        <p className="text-clean-subtext">
          Discover our collection of beautiful, animated components
        </p>
      </div>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start mt-24">
        <Tabs 
          tabs={tabs}
          containerClassName="flex-wrap justify-start gap-2"
          tabClassName="text-sm md:text-base"
          contentClassName="mt-8"
          activeTabClassName="bg-white/10 backdrop-blur-sm"
        />
      </div>
    </div>
  );
} 