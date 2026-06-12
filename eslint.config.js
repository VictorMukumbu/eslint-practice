export default [
  {
    ignores: [
      "dist/**",
      "generated/**",
      "coverage/**",
      "node_modules/**",
      "webpack.config.js",
      "eslint.config.js",
      "TEAM-STANDARDS.md",
    ],
  },

  {
    files: ["**/*.js"],

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-var": "error",

      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "prefer-const": "error",
      eqeqeq: "error",
      curly: "error",
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
];
