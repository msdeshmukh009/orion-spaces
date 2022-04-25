module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-color": { 100: "hsl(204, 83%, 56%)", 200: "hsl(204, 83%, 46%)" },
      "dark-background-color": "hsl(220, 17%, 10%)",
      "secondary-color": {
        50: "hsl(192, 24%, 97%)",
        100: "hsl(193, 21%, 92%)",
        200: "hsl(193, 21%, 70%)",
      },
      "background-color": "hsl(210, 100%, 100%)",
      "text-color": "hsl(207, 7%, 31%)",
      "dark-color": "hsl(210, 25%, 8%)",
    },
  },
  plugins: [],
};
