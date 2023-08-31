import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "blue-oxford-light": "rgb(232, 233, 235)",
        "blue-oxford-light__hover": "rgb(232, 233, 235)",
        "blue-oxford-light__active": "rgb(232, 233, 235)",
        "blue-oxford-normal": "rgb(232, 233, 235)",
        "blue-oxford-normal__hover": "rgb(232, 233, 235)",
        "blue-oxford-normal__active": "rgb(232, 233, 235)",
        "blue-oxford-dark": "rgb(232, 233, 235)",
        "blue-oxford-dark-hover": "rgb(232, 233, 235)",
        "blue-oxford-dark-active": "rgb(232, 233, 235)",
        "blue-oxford-darker": "rgb(232, 233, 235)",

        "blue-munsell-light": "rgb(232, 233, 235)",
        "blue-munsell-light__hover": "rgb(232, 233, 235)",
        "blue-munsell-light__active": "rgb(232, 233, 235)",
        "blue-munsell-normal": "rgb(232, 233, 235)",
        "blue-munsell-normal__hover": "rgb(232, 233, 235)",
        "blue-munsell-normal__active": "rgb(232, 233, 235)",
        "blue-munsell-dark": "rgb(232, 233, 235)",
        "blue-munsell-dark-hover": "rgb(232, 233, 235)",
        "blue-munsell-dark-active": "rgb(232, 233, 235)",
        "blue-munsell-darker": "rgb(232, 233, 235)",

        "plum-light": "rgb(232, 233, 235)",
        "plum-light__hover": "rgb(232, 233, 235)",
        "plum-light__active": "rgb(232, 233, 235)",
        "plum-normal": "rgb(232, 233, 235)",
        "plum-normal__hover": "rgb(232, 233, 235)",
        "plum-normal__active": "rgb(232, 233, 235)",
        "plum-dark": "rgb(232, 233, 235)",
        "plum-dark-hover": "rgb(232, 233, 235)",
        "plum-dark-active": "rgb(232, 233, 235)",
        "plum-darker": "rgb(232, 233, 235)",

        "thistle-light": "rgb(232, 233, 235)",
        "thistle-light__hover": "rgb(232, 233, 235)",
        "thistle-light__active": "rgb(232, 233, 235)",
        "thistle-normal": "rgb(232, 233, 235)",
        "thistle-normal__hover": "rgb(232, 233, 235)",
        "thistle-normal__active": "rgb(232, 233, 235)",
        "thistle-dark": "rgb(232, 233, 235)",
        "thistle-dark-hover": "rgb(232, 233, 235)",
        "thistle-dark-active": "rgb(232, 233, 235)",
        "thistle-darker": "rgb(232, 233, 235)",

        "chocolate-cosmos-light": "rgb(232, 233, 235)",
        "chocolate-cosmos-light__hover": "rgb(232, 233, 235)",
        "chocolate-cosmos-light__active": "rgb(232, 233, 235)",
        "chocolate-cosmos-normal": "rgb(232, 233, 235)",
        "chocolate-cosmos-normal__hover": "rgb(232, 233, 235)",
        "chocolate-cosmos-normal__active": "rgb(232, 233, 235)",
        "chocolate-cosmos-dark": "rgb(232, 233, 235)",
        "chocolate-cosmos-dark-hover": "rgb(232, 233, 235)",
        "chocolate-cosmos-dark-active": "rgb(232, 233, 235)",
        "chocolate-cosmos-darker": "rgb(232, 233, 235)",

        "blue-slate-light": "rgb(232, 233, 235)",
        "blue-slate-light__hover": "rgb(232, 233, 235)",
        "blue-slate-light__active": "rgb(232, 233, 235)",
        "blue-slate-normal": "rgb(232, 233, 235)",
        "blue-slate-normal__hover": "rgb(232, 233, 235)",
        "blue-slate-normal__active": "rgb(232, 233, 235)",
        "blue-slate-dark": "rgb(232, 233, 235)",
        "blue-slate-dark-hover": "rgb(232, 233, 235)",
        "blue-slate-dark-active": "rgb(232, 233, 235)",
        "blue-slate-darker": "rgb(232, 233, 235)",

        "blue-navy-light": "rgb(232, 233, 235)",
        "blue-navy-light__hover": "rgb(232, 233, 235)",
        "blue-navy-light__active": "rgb(232, 233, 235)",
        "blue-navy-normal": "rgb(232, 233, 235)",
        "blue-navy-normal__hover": "rgb(232, 233, 235)",
        "blue-navy-normal__active": "rgb(232, 233, 235)",
        "blue-navy-dark": "rgb(232, 233, 235)",
        "blue-navy-dark-hover": "rgb(232, 233, 235)",
        "blue-navy-dark-active": "rgb(232, 233, 235)",
        "blue-navy-darker": "rgb(232, 233, 235)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
