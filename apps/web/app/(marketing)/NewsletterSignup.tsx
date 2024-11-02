'use client';

import { NewsletterSignupContainer } from '@kit/ui/marketing';

export function NewsletterSignup() {
  const handleNewsletterSignup = async (email: string) => {
    try {
      // Implement your newsletter signup logic here
      // For example: await apiClient.subscribeToNewsletter(email);
      console.log('Newsletter signup:', email);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      throw error;
    }
  };

  return (
    <NewsletterSignupContainer 
      onSignup={handleNewsletterSignup}
      heading={<span className="font-bold">The Solopreneur Blueprint</span>}
      description="How to find online business ideas, launch fast, and get profitable. Join 9,000+ Solopreneurs"
      successMessage="You're all set! Check your inbox for a confirmation email."
      errorMessage="Oops! Something went wrong. Please try again later."
      className="max-w-md mx-auto p-8"
      buttonClassName="w-auto px-6 max-w-[200px] mx-auto bg-primary text-primary-foreground hover:bg-primary/90"
    />
  );
}
