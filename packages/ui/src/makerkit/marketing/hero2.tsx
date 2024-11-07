import { ArrowRight } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { Input } from "../../shadcn/input";
import { Button } from "../../shadcn/button";
import { Iphone15Pro } from "../../shadcn/iphone-15-pro";

export function Hero() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Implement your newsletter signup logic here
      // For example: await subscribeToNewsletter(email);
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      {/* Left content container */}
      <div className="flex flex-1 flex-col items-center gap-8 lg:gap-10">
        {/* Top badge */}
        <div className="flex cursor-pointer items-center gap-1 rounded-full border border-border/40 bg-background/95 px-3 py-0.5 transition-opacity duration-300 hover:opacity-80">
          <span className="text-sm">The Solopreneur Blueprint</span>
          <ArrowRight size={16} />
        </div>

        {/* Main heading */}
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          The <span className="relative inline-block">
            only
            {/* Your existing SVG underline */}
          </span> newsletter you need to build a{" "}
          <span className="inline-grid w-full">
            <span className="col-start-1 row-start-1 animate-business-empire-glow blur-xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              cash-flowing
            </span>
            <span className="col-start-1 row-start-1 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              cash-flowing
            </span>
          </span> internet business.
        </h1>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-center gap-2 sm:flex-row sm:items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 w-[320px] cursor-text rounded-[10px] border-2 border-border/40 bg-background/95 px-4 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:w-[225.727px] sm:grow sm:px-6 sm:text-lg"
          />
          <Button 
            type="submit"
            size="lg"
            disabled={isLoading}
            className="primary-button mt-2 w-[320px] px-6 sm:mt-0 sm:w-auto"
          >
            <span className="flex items-center justify-center whitespace-nowrap text-black sm:justify-start">
              {isLoading ? "Subscribing..." : "Subscribe"}
              <ArrowRight size={14} className="ml-2 inline sm:hidden" />
              <ArrowRight size={16} className="ml-2 hidden sm:inline" />
            </span>
          </Button>
        </form>
        {message && <p className="text-sm text-accent">{message}</p>}

        {/* Description */}
        <p className="max-w-md text-center text-lg text-muted-foreground">
          Join 5,000+ solopreneurs getting 5-minute newsletters every Saturday packed with online
          business ideas backed by real-life case studies, strategies, and resources to launch,
          grow, and monetize your online business.
        </p>
      </div>

      {/* Right content (iPhone) container */}
      <div className="relative mx-auto flex w-full max-w-[500px] flex-1 items-center justify-center lg:max-w-none">
        <div className="h-[183.37vw] max-h-[882px] min-h-[611px] w-[90vw] min-w-[300px] max-w-[433px] overflow-hidden lg:max-h-[794px] lg:max-w-[390px]">
          <Iphone15Pro
            className="size-full"
            src="/email_fazctz.webp"
            borderColor="currentColor"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}