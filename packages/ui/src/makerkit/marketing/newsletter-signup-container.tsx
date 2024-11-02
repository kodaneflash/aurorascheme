'use client';

import { useCallback, useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '../../shadcn/alert';
import { Heading } from '../../shadcn/heading';
import { cn } from '../../utils';
import { Spinner } from '../spinner';
import { NewsletterSignup } from './newsletter-signup';

interface NewsletterSignupContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onSignup: (email: string) => Promise<void>;
  heading?: string;
  description?: string;
  successMessage?: string;
  errorMessage?: string;
  buttonClassName?: string;
}

export function NewsletterSignupContainer({
  onSignup,
  heading = 'Subscribe to our newsletter',
  description = 'Get the latest updates and offers directly to your inbox.',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'An error occurred. Please try again.',
  className,
  buttonClassName,
  ...props
}: NewsletterSignupContainerProps) {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = useCallback(
    async (data: { email: string }) => {
      setStatus('loading');

      try {
        await onSignup(data.email);

        setStatus('success');
      } catch (error) {
        console.error('Newsletter signup error:', error);
        setStatus('error');
      }
    },
    [onSignup],
  );

  return (
    <div
      className={cn('flex flex-col items-center space-y-4', className)}
      {...props}
    >
      <div className="text-center">
        <Heading level={4} className="text-foreground mb-2">{heading}</Heading>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {status === 'idle' && <NewsletterSignup onSignup={handleSubmit} buttonClassName={buttonClassName} />}

      {status === 'loading' && (
        <div className="flex justify-center">
          <Spinner className="h-8 w-8 text-primary" />
        </div>
      )}

      {status === 'success' && (
        <div className="w-full">
          <Alert variant="success" className="bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-800">
            <AlertTitle className="text-green-800 dark:text-green-100">Success!</AlertTitle>
            <AlertDescription className="text-green-700 dark:text-green-200">{successMessage}</AlertDescription>
          </Alert>
        </div>
      )}

      {status === 'error' && (
        <div className="w-full">
          <Alert variant="destructive" className="bg-red-100 dark:bg-red-900 border-red-200 dark:border-red-800">
            <AlertTitle className="text-red-800 dark:text-red-100">Error</AlertTitle>
            <AlertDescription className="text-red-700 dark:text-red-200">{errorMessage}</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
