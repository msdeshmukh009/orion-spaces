module.exports = {
  darkMode: "class",
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
      "secondary-color-dm": {
        50: "hsl(212, 23%, 15%)",
        100: "hsl(210, 35%, 10%)",
        200: "hsl(193, 21%, 70%)",
      },
      "background-color": "hsl(210, 100%, 100%)",
      "background-color-dm": "hsl(210, 34%, 13%)",
      "text-color": "hsl(207, 7%, 31%)",
      "text-color-dm": "#f7f9f9",
      "dark-color": "hsl(210, 25%, 8%)",
      "red-color": "hsl(351, 83%, 55%)",
      "green-color": "hsl(120, 55%, 49%)",
      "modal-bg-color-dm": "hsla(208, 18%, 44%, 0.4)",
      "modal-bg-color": "rgba(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
};

/**
 *   --background-color: hsl(233, 13%, 14%);
  --option-bg-color: hsl(203, 26%, 29%);
  --text-color: hsl(208, 31%, 90%);
  --sidebar-bg-color: hsla(0, 2%, 10%, 0.1);
  --sidebar-fallback-bg-color: hsla(0, 2%, 17%, 0.85);
  --sidebar-list-hover-color: hsl(180, 3%, 24%);
  --border-color: hsl(192, 4%, 44%);
  --card-shadow: 0 4px 8px 0 hsla(0, 1%, 29%, 0.2);
  --card-hover-shadow: 0 8px 16px 0 hsla(0, 1%, 55%, 0.2);
  --card-overlay-color: hsla(240, 4%, 38%, 0.6);
 */
