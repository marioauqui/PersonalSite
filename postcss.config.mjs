// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // 👈 use the new plugin
    autoprefixer: {},
  },
};
