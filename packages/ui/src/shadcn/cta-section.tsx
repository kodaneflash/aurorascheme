import Link from "next/link";

import { Input } from "../shadcn/input";
import { Button } from "../shadcn/button";
import { SocialProof } from "./social-proof";

export function CtaSection() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center text-primary-foreground">
          Join 60,000+ Creators
        </h2>
        
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Subscribe to the Creator Science newsletter for real-life experiments, expert interviews,
          and evidence-backed advice every week.
        </p>
        
        <div className="flex w-full flex-col items-center gap-6">
          <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center">
            <Input
              placeholder="Enter your email"
              type="email"
              className="h-12 border-border bg-card px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:flex-1"
            />
            <Button size="lg" asChild className="h-12 cursor-pointer text-base sm:h-14">
              <Link href="#">Subscribe</Link>
            </Button>
          </form>
          
          <SocialProof />
        </div>
      </div>
    </section>
  );
}
