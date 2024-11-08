import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

import { Toaster } from '@kit/ui/sonner';
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
      <body>
        <RootProviders theme={theme} lang={language}>
          {children}
        </RootProviders>

        <Toaster richColors={false} />
        <Analytics />
        
        {/* Optimized Senja Script Loading */}
        <Script
          src="https://static.senja.io/dist/platform.js"
          strategy="lazyOnload"
          id="senja-script"
          onLoad={() => {
            console.log('Senja script loaded successfully');
          }}
        />
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
