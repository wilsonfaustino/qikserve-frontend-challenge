import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        app: {
          400: '#F8F9FA',
          500: '#EEEEEE',
        },
      },
      minWidth: ({ theme }) => ({
        ...theme('width'),
      }),
      maxWidth: ({ theme }) => ({
        ...theme('width'),
      }),
      minHeight: ({ theme }) => ({
        ...theme('height'),
      }),
      maxHeight: ({ theme }) => ({
        ...theme('height'),
      }),
    },
  },
  plugins: [],
}
export default config
