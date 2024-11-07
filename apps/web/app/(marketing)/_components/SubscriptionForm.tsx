"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@kit/ui/input";
import { Button } from "@kit/ui/button";
import { Alert, AlertProps } from "@kit/ui/alert";

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
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 sm:flex-row sm:items-center">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 w-full cursor-text rounded-[10px] bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-1 sm:h-14 sm:px-6 sm:text-lg"
        />
        <Button 
          type="submit" 
          size="lg"
          disabled={isLoading} 
          className="mt-2 w-full gradientprimary px-6 sm:mt-0 sm:w-auto"
        >
          <span className="flex items-center justify-center whitespace-nowrap text-black sm:justify-start">
            {isLoading ? "Joining..." : "Join our Community"}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        </Button>
      </form>

      {message && (
        <Alert 
          variant={status}
          className="mt-4"
        >
          {message}
        </Alert>
      )}
    </div>
  );
}
