import { ArrowRight } from "lucide-react";
import * as React from "react";
import { Input } from "../../shadcn/input";
import { Button } from "../../shadcn/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center py-20">
      {/* Left content container */}
      <div className="flex flex-col items-center text-center max-w-[42rem]">
        {/* Top badge */}
        <div className="flex items-center gap-1 rounded-full border border-border/40 bg-background/95 px-4 py-1.5 text-sm transition-colors">
          <span>The Solopreneur Blueprint</span>
          <ArrowRight size={14} />
        </div>

        {/* Main heading */}
        <h1 className="text-[48px] font-semibold font-heading tracking-tight mt-8">
          The <span className="relative inline-block">
            only
            <svg
              className="absolute -bottom-1 left-0 h-3 w-full"
              viewBox="0 0 200 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(202, 198, 251)" />
                  <stop offset="50%" stopColor="rgb(186, 239, 251)" />
                  <stop offset="100%" stopColor="rgb(225, 251, 156)" />
                </linearGradient>
              </defs>
              <path
                d="M1 7.5C31 3.5 61 3.5 91 3.5C121 3.5 151 3.5 181 7.5"
                stroke="url(#underlineGradient)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </span> newsletter you need to build a{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            cash-flowing
          </span>{" "}
          internet business.
        </h1>

        {/* Email form */}
        <form className="flex w-full max-w-lg flex-col sm:flex-row gap-3 mt-8">
          <Input
            placeholder="Enter your email"
            type="email"
            className="h-12 flex-1 rounded-xl border-border/40 bg-background/95 px-4 text-base placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary"
          />
          <Button 
            size="lg"
            className="h-12 rounded-xl bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 text-black font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </form>

        {/* Description */}
        <p className="text-lg text-muted-foreground mt-8">
          Join 5,000+ solopreneurs getting 5-minute newsletters every Saturday packed with online
          business ideas backed by real-life case studies, strategies, and resources to launch,
          grow, and monetize your online business.
        </p>
      </div>
    </section>
  );
}
