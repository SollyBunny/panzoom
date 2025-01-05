import js from "@eslint/js"
// import react from "eslint-plugin-react" // currently broken
// import configPrettier from "eslint-config-prettier" // currently broken
// import pluginPrettier from "eslint-plugin-prettier"
// import ts from "@typescript-eslint/eslint-plugin"  // currently broken
import globals from "globals"

const cleanedGlobals = Object.fromEntries(
  Object.entries({
    ...globals.browser,
    ...globals.node,
  }).map(([key, value]) => [key.trim(), value])
)

cleanedGlobals["ga"] = "readonly"

export default [
  {
    ignores: [
      "node_modules/",
      "coverage/",
      "demo/demo/",
      "demo/panzoom.js",
      "dist/",
      "docs/",
      ".yarn/",
      "rollup.config.mjs",
      "tasks/gzipSize.mjs",
    ],
  },
  js.configs.recommended,
  // ts.configs.recommended,
  // react,
  // react.configs.recommended,
  // pluginPrettier,
  // configPrettier,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: cleanedGlobals,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    rules: {
      "no-unused-vars": "off",
      // "prettier/prettier": "error",
      // "@typescript-eslint/explicit-function-return-type": 0,
      // "@typescript-eslint/no-var-requires": 0,
      // "@typescript-eslint/no-use-before-define": 0,
      // "@typescript-eslint/no-explicit-any": 0,
      // "@typescript-eslint/explicit-module-boundary-types": 0,
      // "@typescript-eslint/no-unused-vars": [
      //   "error",
      //   {
      //     "args": "after-used",
      //     "argsIgnorePattern": "^_"
      //   },
      // ],
    },
  },
];
