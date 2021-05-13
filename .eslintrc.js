const baseConfig = require("./node_modules/@uxland/project-tools/lint/.eslintrc");

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "unused-imports/no-unused-imports-ts": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
  },
  env: {
    node: true,
  },
};
