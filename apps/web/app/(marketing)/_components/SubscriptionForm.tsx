"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@kit/ui/input";
import { Button } from "@kit/ui/button";
import { Alert, AlertProps } from "@kit/ui/alert";
import { SocialProof } from "@kit/ui/social-proof";


export function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<AlertProps['variant']>('default');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setEmail("");
        setMessage(data.message);
        setStatus('success');
      } else {
        setMessage(data.message || "An error occurred. Please try again.");
        setStatus('destructive');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("An error occurred. Please try again later.");
      setStatus('destructive');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-8">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2 sm:flex-row sm:items-center">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 border-border px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:flex-1"
        />
        <Button 
          type="submit" 
          size="lg" 
          disabled={isLoading}
          className="h-12 cursor-pointer text-base sm:h-14"
        >
          <span className="flex items-center justify-center">
            {isLoading ? "Subscribing..." : "Subscribe"}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        </Button>
      </form>

      {message && (
        <Alert 
          variant={status}
          className="mt-4 w-full"
        >
          {message}
        </Alert>
      )}

      <SocialProof />
    </div>
  );
}
