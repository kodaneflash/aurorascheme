import type { Config } from 'tailwindcss';

import baseConfig from '@kit/tailwind-config';

export default {
  content: [...baseConfig.content],
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1a202c',
        'custom-cyan': '#22d3ee',
        'custom-gray': '#333333',
        'custom-bg': '#FAF9F8',
      },
      animation: {
        'business-empire-glow': 'business-empire-glow 1s ease-out',
      },
      backgroundImage: {
        'business-empire-gradient': 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
      },
      typography: {
        'clean-subtext': {
          css: {
            fontSize: '16px',
            lineHeight: '1.5',
            maxWidth: '32rem',
          },
        },
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
} satisfies Config;