/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 100px)',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 8px, #fff 80px)',
        circularLightMd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 6px,#fff 60px)",
        circularLightSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 4px,#fff 40px)",
        circularLightXs: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 2px,#fff 20px)",

      },
    },
    screens: {
      '2xl':{max:'1535px'},
      xl: {max:'1279px'},
      lg: {max:'1023px'},
      md: {max:'767px'},
      sm: {max:'639px'},
      xs: {max:'479px'},
    },
  },
  plugins: [],
}

