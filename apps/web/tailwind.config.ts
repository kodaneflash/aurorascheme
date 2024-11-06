import type { Config } from 'tailwindcss';

import baseConfig from '@kit/tailwind-config';

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content],
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1a202c',
        'custom-cyan': '#22d3ee',
        'custom-gray': '#333333',
        'custom-bg': '#FAF9F8', // Add this line
      },
      keyframes: {
        'business-empire-glow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.6'
          }
        }
      },
      animation: {
        'business-empire-glow': 'business-empire-glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'business-empire-gradient': 'linear-gradient(90deg, oklch(0.748 0.26 342.55) 4%, oklch(0.7328 0.2405 2.36499) 22%, oklch(0.6569 0.196 275.75) 45%, oklch(0.701 0.1815 229.68) 67%, oklch(0.7451 0.167 183.61) 100.2%)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['4.25rem', { lineHeight: '1' }],
      },
      fontWeight: {
        black: '900',
      }
    },
  },
} satisfies Config;