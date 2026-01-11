/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        civil: {
          primary: '#1a2744',
          dark: '#0f1624',
          light: '#2a3f5f',
        },
        interior: {
          gold: '#d4af6a',
          bronze: '#b8956a',
          champagne: '#f4e9d9',
        },
        graphite: '#2c2c2c',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-civil': 'linear-gradient(135deg, #1a2744 0%, #0f1624 100%)',
        'gradient-interior': 'linear-gradient(135deg, #d4af6a 0%, #b8956a 100%)',
      },
    },
  },
  plugins: [],
};
