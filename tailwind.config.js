/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Window Tide - Primary palette
        tide: {
          50: '#E8F2F8',
          100: '#C2DDF0',
          200: '#A8C8E1',
          300: '#6B9BD1',
          400: '#4A7BA7',
          500: '#2E5984',
          600: '#24496B',
          700: '#1A3652',
          800: '#102339',
          900: '#061020',
        },
        // Mountain Haze - Secondary palette
        haze: {
          50: '#F0F4F7',
          100: '#D7E1E8',
          200: '#B8C5D1',
          300: '#8FA5B8',
          400: '#5D7A8B',
          500: '#2C3E50',
          600: '#233140',
          700: '#1A2530',
          800: '#111820',
          900: '#080C10',
        },
        // Bubbly Banana - Accent colors
        bubble: {
          turquoise: '#40E0D0',
          'turquoise-light': '#7FEBE4',
          'turquoise-dark': '#33B3A6',
          pink: '#FFB6C1',
          'pink-light': '#FFCCD5',
          'pink-dark': '#FF99A8',
          yellow: '#F0E68C',
          'yellow-light': '#F5EFAB',
          'yellow-dark': '#E6D966',
          sky: '#87CEEB',
        },
        // Freshly Picked Oranges - Warm tones
        orange: {
          50: '#FDF7F0',
          100: '#F8E6D6',
          200: '#F0C8A0',
          300: '#E8A96B',
          400: '#D2691E',
          500: '#FF8C00',
          600: '#CC7000',
          700: '#995400',
          800: '#663800',
          900: '#331C00',
        },
        // Pale Blossom - Deep reds and corals
        blossom: {
          50: '#FFF0F0',
          100: '#FFD6D6',
          200: '#FFB6C1',
          300: '#FF8A8A',
          400: '#FF6347',
          500: '#DC143C',
          600: '#B30000',
          700: '#8B0000',
          800: '#5C0000',
          900: '#2E0000',
        },
        // Brand colors
        brand: {
          primary: '#2E5984',    // tide-500
          secondary: '#2C3E50',  // haze-500
          accent: '#40E0D0',     // bubble-turquoise
          warm: '#FF8C00',       // orange-500
          soft: '#FFB6C1',       // blossom-200
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}