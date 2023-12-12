import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '0px 4px 15.5px -8px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        primary: '#FD591E',
        secondary: '#0F0F0F',
        blue_color: '#B7E2F5',
        yellow_color: '#F5F3B7',
        purple_color: '#EBB7F5',
        black_color: '#0F0F0F',
        pink_color: '#FF477E',
        orange_color: '#FF725E',
        'default-border': '#E5E5E5',
        gray: {
          50: '#FAFAFA',
          150: '#E5E5E5',
          170: '#EAEEF0',
          250: '#BBBBBB',
          350: '#626262',
          450: '#A2A2A2',
          550: '#7B7B7B',
          650: '#333333',
        }
      },
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.default-border", "currentColor"),
      }),
      fontSize: {
        'head-500': '128px',
        'head-400': '100px',
        'head-300': '70px',
        'head-200': '50px',
        'head-100': '30px',
        'head-75': '22px',
      },
      screens: {
        'xs': '440px',
        'short': {'raw': '(max-height: 1000px)'},
        'tall': {'raw': '(min-height: 1000px)'}
      }
    },
  },
  plugins: [],
}
export default config
