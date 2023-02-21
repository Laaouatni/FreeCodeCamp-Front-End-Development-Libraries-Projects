const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      animation: {
        "bounce-fast": "bounce 0.2s linear infinite",
      }
    },
  },

  plugins: [],
};

module.exports = config;
