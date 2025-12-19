/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias - Verde Sustentável (Dark Mode)
        primary: {
          deep: '#1F6F3A',
          vivid: '#6BAF4A',
          light: '#8BC973',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        // Cores de Ação - Azul Tecnológico
        accent: {
          blue: '#00A3E0',
          blueLight: '#33B5E5',
          blueDark: '#0077A3',
        },
        // Cores de fundo (Dark Mode)
        background: {
          primary: '#121212',
          secondary: '#1E1E1E',
          tertiary: '#2A2A2A',
          elevated: '#333333',
        },
        // Cores de superfície
        surface: {
          card: '#1E1E1E',
          modal: '#252525',
          elevated: '#2A2A2A',
        },
        // Cores de texto (Dark Mode)
        text: {
          primary: '#F9F9F9',
          secondary: '#B3B3B3',
          muted: '#808080',
          inverse: '#121212',
        },
        // Cores de estado
        status: {
          success: '#6BAF4A',
          warning: '#F5A623',
          error: '#E74C3C',
          info: '#00A3E0',
        },
      },
      fontFamily: {
        sans: ['System'],
      },
    },
  },
  plugins: [],
};
