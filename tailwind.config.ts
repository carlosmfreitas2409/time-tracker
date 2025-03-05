import type { Config } from 'tailwindcss';

import { heroui } from '@heroui/theme';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@heroui/theme/dist/components/(avatar|button|card|checkbox|chip|divider|input|popover|ripple|spinner|form).js',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      containers: {
        xs: '14rem',
      },
      colors: {
        sidebar: 'hsl(var(--sidebar))',
      },
    },
  },
  // theme: {
  //   extend: {
  //     borderRadius: {
  //       lg: 'var(--radius)',
  //       md: 'calc(var(--radius) - 2px)',
  //       sm: 'calc(var(--radius) - 4px)',
  //     },
  //     colors: {
  //       background: 'hsl(var(--background))',
  //       foreground: 'hsl(var(--foreground))',
  //       card: {
  //         DEFAULT: 'hsl(var(--card))',
  //         foreground: 'hsl(var(--card-foreground))',
  //       },
  //       popover: {
  //         DEFAULT: 'hsl(var(--popover))',
  //         foreground: 'hsl(var(--popover-foreground))',
  //       },
  //       primary: {
  //         DEFAULT: 'hsl(var(--primary))',
  //         foreground: 'hsl(var(--primary-foreground))',
  //       },
  //       secondary: {
  //         DEFAULT: 'hsl(var(--secondary))',
  //         foreground: 'hsl(var(--secondary-foreground))',
  //       },
  //       muted: {
  //         DEFAULT: 'hsl(var(--muted))',
  //         foreground: 'hsl(var(--muted-foreground))',
  //       },
  //       accent: {
  //         DEFAULT: 'hsl(var(--accent))',
  //         foreground: 'hsl(var(--accent-foreground))',
  //       },
  //       destructive: {
  //         DEFAULT: 'hsl(var(--destructive))',
  //         foreground: 'hsl(var(--destructive-foreground))',
  //       },
  //       border: 'hsl(var(--border))',
  //       input: 'hsl(var(--input))',
  //       ring: 'hsl(var(--ring))',
  //       chart: {
  //         1: 'hsl(var(--chart-1))',
  //         2: 'hsl(var(--chart-2))',
  //         3: 'hsl(var(--chart-3))',
  //         4: 'hsl(var(--chart-4))',
  //         5: 'hsl(var(--chart-5))',
  //       },
  //     },
  //   },
  // },
  plugins: [
    heroui({
      prefix: 'timer',
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            divider: '#E0E0E0',
            primary: {
              // '50': '#f9dfe6',
              // '100': '#f0b3c4',
              // '200': '#e786a1',
              // '300': '#de597f',
              // '400': '#d52d5c',
              // '500': '#cc003a',
              // '600': '#a80030',
              // '700': '#850026',
              // '800': '#61001c',
              // '900': '#3d0011',
              foreground: '#FFFFFF',
              DEFAULT: '#cc003a',
            },
          },
        },
      },
    }),
    require('@tailwindcss/container-queries'),
  ],
} as Config;
