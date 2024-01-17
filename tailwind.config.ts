import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    // colors: {
    //   'darkColor': '#2D2D2D',
    //   'whiteColor': '#F1F1F1',
    //   'lightTextColor': '#6C6C6C',
    // },

    screens: {
      xs: '320px',
      xm: '350px',
      xl: '375px',
      sx: '400px',
      sm: '420px',
      sl: '600px',
      mx: '660px',
      md: '768px',
      lg: '976px',
      lmg: '1124px',
      lx: '1040px',
      lmx: '1200px',
      lp: '1366px',
      lm: '1440px',
      ll: '1500px',
      fulhd: '1920px',
      kk: '2560px'
    },


    extend: {
      grayscale: {
        50: '50%',
        110: '100%',
        90: '100%',
      }
    },
  },
  plugins: [],
}
export default config
