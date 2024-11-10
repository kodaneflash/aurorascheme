import { cookies } from 'next/headers';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import Analytics to reduce initial bundle size
const Analytics = dynamic(() => 
  import('@vercel/analytics/react').then(mod => mod.Analytics), 
  { ssr: false }
);

// Dynamically import Toaster with loading fallback
const Toaster = dynamic(() => 
  import('@kit/ui/sonner').then(mod => mod.Toaster),
  { ssr: false }
);

import { cn } from '@kit/ui/utils';
import { RootProviders } from '~/components/root-providers';
import { heading, sans } from '~/lib/fonts';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { generateRootMetadata } from '~/lib/root-metdata';

import '../styles/globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = await createI18nServerInstance();
  const theme = getTheme();
  const className = getClassName(theme);

  return (
    <html lang={language} className={className}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href={heading.url}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <RootProviders theme={theme} lang={language}>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </RootProviders>

        <Toaster richColors={false} />
        <Analytics />
      </body>
    </html>
  );
}

function getClassName(theme?: string) {
  const dark = theme === 'dark';
  const light = !dark;

  return cn(
    'min-h-screen bg-background antialiased',
    sans.variable,
    heading.variable,
    {
      dark,
      light,
    },
  );
}

function getTheme() {
  return cookies().get('theme')?.value;
}

export const generateMetadata = generateRootMetadata;
