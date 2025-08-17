module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00FFFF", // electric-cyan
          50: "#E6FFFF", // electric-cyan-50
          100: "#CCFFFF", // electric-cyan-100
          200: "#99FFFF", // electric-cyan-200
          300: "#66FFFF", // electric-cyan-300
          400: "#33FFFF", // electric-cyan-400
          500: "#00FFFF", // electric-cyan-500
          600: "#00CCCC", // electric-cyan-600
          700: "#009999", // electric-cyan-700
          800: "#006666", // electric-cyan-800
          900: "#003333", // electric-cyan-900
        },
        secondary: {
          DEFAULT: "#FF1493", // hot-pink
          50: "#FFE6F2", // hot-pink-50
          100: "#FFCCE6", // hot-pink-100
          200: "#FF99CC", // hot-pink-200
          300: "#FF66B3", // hot-pink-300
          400: "#FF3399", // hot-pink-400
          500: "#FF1493", // hot-pink-500
          600: "#CC1076", // hot-pink-600
          700: "#990C58", // hot-pink-700
          800: "#66083B", // hot-pink-800
          900: "#33041D", // hot-pink-900
        },
        accent: {
          DEFAULT: "#32CD32", // lime-green
          50: "#EAFAEA", // lime-green-50
          100: "#D5F5D5", // lime-green-100
          200: "#ABEBAB", // lime-green-200
          300: "#81E081", // lime-green-300
          400: "#57D657", // lime-green-400
          500: "#32CD32", // lime-green-500
          600: "#28A428", // lime-green-600
          700: "#1E7B1E", // lime-green-700
          800: "#145214", // lime-green-800
          900: "#0A290A", // lime-green-900
        },
        background: {
          DEFAULT: "#0B1426", // deep-space-blue
          50: "#E8EAEF", // deep-space-blue-50
          100: "#D1D5DF", // deep-space-blue-100
          200: "#A3ABBF", // deep-space-blue-200
          300: "#75819F", // deep-space-blue-300
          400: "#47577F", // deep-space-blue-400
          500: "#192D5F", // deep-space-blue-500
          600: "#14244C", // deep-space-blue-600
          700: "#0F1B39", // deep-space-blue-700
          800: "#0A1226", // deep-space-blue-800
          900: "#0B1426", // deep-space-blue-900
        },
        surface: {
          DEFAULT: "#1A2332", // elevated-midnight-blue
          50: "#E9EAED", // elevated-midnight-blue-50
          100: "#D3D5DB", // elevated-midnight-blue-100
          200: "#A7ABB7", // elevated-midnight-blue-200
          300: "#7B8193", // elevated-midnight-blue-300
          400: "#4F576F", // elevated-midnight-blue-400
          500: "#232D4B", // elevated-midnight-blue-500
          600: "#1C243C", // elevated-midnight-blue-600
          700: "#151B2D", // elevated-midnight-blue-700
          800: "#0E121E", // elevated-midnight-blue-800
          900: "#1A2332", // elevated-midnight-blue-900
        },
        text: {
          primary: "#FFFFFF", // pure-white
          secondary: {
            DEFAULT: "#B8C5D6", // soft-blue-gray
            50: "#F7F8FA", // soft-blue-gray-50
            100: "#EFF2F5", // soft-blue-gray-100
            200: "#DFE4EB", // soft-blue-gray-200
            300: "#CFD7E1", // soft-blue-gray-300
            400: "#BFC9D7", // soft-blue-gray-400
            500: "#B8C5D6", // soft-blue-gray-500
            600: "#939EAB", // soft-blue-gray-600
            700: "#6E7680", // soft-blue-gray-700
            800: "#494F55", // soft-blue-gray-800
            900: "#24272A", // soft-blue-gray-900
          },
        },
        success: "#32CD32", // lime-green
        warning: {
          DEFAULT: "#FFD700", // bright-gold
          50: "#FFFEF5", // bright-gold-50
          100: "#FFFCEB", // bright-gold-100
          200: "#FFF9D7", // bright-gold-200
          300: "#FFF6C3", // bright-gold-300
          400: "#FFF3AF", // bright-gold-400
          500: "#FFD700", // bright-gold-500
          600: "#CCAC00", // bright-gold-600
          700: "#998100", // bright-gold-700
          800: "#665600", // bright-gold-800
          900: "#332B00", // bright-gold-900
        },
        error: {
          DEFAULT: "#FF6B6B", // coral-red
          50: "#FFF0F0", // coral-red-50
          100: "#FFE1E1", // coral-red-100
          200: "#FFC3C3", // coral-red-200
          300: "#FFA5A5", // coral-red-300
          400: "#FF8787", // coral-red-400
          500: "#FF6B6B", // coral-red-500
          600: "#CC5555", // coral-red-600
          700: "#994040", // coral-red-700
          800: "#662A2A", // coral-red-800
          900: "#331515", // coral-red-900
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 20, 147, 0.3)',
        'neon-green': '0 0 20px rgba(50, 205, 50, 0.3)',
      },
      transitionDuration: {
        '300': '300ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}