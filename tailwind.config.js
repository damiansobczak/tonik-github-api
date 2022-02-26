module.exports = {
  content: ["./src/**/*.{jsx,js,tsx}"],
  theme: {
    extend: {
      animation: {
        shine: 'shine 1.6s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '500px' },
        }
      }
    },
  },
  plugins: [],
}
