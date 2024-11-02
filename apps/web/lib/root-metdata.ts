import { Metadata } from 'next';

import { headers } from 'next/headers';

import appConfig from '~/config/app.config';

export const generateRootMetadata = (): Metadata => {
  const csrfToken = headers().get('x-csrf-token') ?? '';

  return {
    title: appConfig.title,
    description: appConfig.description,
    metadataBase: new URL(appConfig.url),
    applicationName: appConfig.name,
    other: {
      'csrf-token': csrfToken,
    },
    openGraph: {
      url: appConfig.url,
      siteName: appConfig.name,
      title: appConfig.title,
      description: appConfig.description,
      images: [
        {
          url: appConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Open Graph Image for ${appConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: appConfig.title,
      description: appConfig.description,
      images: [appConfig.ogImage],
    },
    icons: {
      icon: '/images/favicon/favicon.ico',
      apple: '/images/favicon/apple-touch-icon.png',
    },
  };
};
