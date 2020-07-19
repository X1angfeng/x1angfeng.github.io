module.exports = {
  env: {
    es6: false,
    browser: true
  },
  globals: {
    $: "readonly",
    hexo: "readonly"
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"]
};
