import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#daf0e3',
          200: '#b8e1ca',
          300: '#8bcbaa',
          400: '#5db088',
          500: '#3d946f',
          600: '#2d7659',
          700: '#255e49',
          800: '#1f4b3b',
          900: '#1a3e32',
        },
        secondary: {
          50: '#fef6ee',
          100: '#fdecd7',
          200: '#f9d5ae',
          300: '#f5b87a',
          400: '#f09144',
          500: '#ec7420',
          600: '#dd5916',
          700: '#b84214',
          800: '#923518',
          900: '#762e16',
        },
        accent: {
          50: '#faf5f0',
          100: '#f4e8da',
          200: '#e8cfb3',
          300: '#d9af84',
          400: '#ca8e5c',
          500: '#c0774b',
          600: '#b3633f',
          700: '#954e36',
          800: '#784132',
          900: '#61372b',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
