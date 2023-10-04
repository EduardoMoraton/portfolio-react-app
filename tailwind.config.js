module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        currentLineBackDrop: "rgba(68, 71, 90, 0.8)",
        bg: "#282a36",
        currentLine: "#44475a",
        foreground: "#f8f8f2",
        comment: "#6272a4",
        cyan: "#8be9fd",
        green: "#50fa7b",
        orange: "#ffb86c",
        pink: "#ff79c6",
        purple: "#bd93f9",
        red: "#ff5555",
        yellow: "#f1fa8c",
      },
      keyframes: {
        colormorph: {
          '0%, 100%': { 'background-color': '#bd93f9' },
          '50%': { 'background-color': '#ff79c6' },
        },

        animation: {
          colormorph: 'colormorph 2s ease-in-out infinite',
        }
      }
    },
  },
  plugins: [],
};
