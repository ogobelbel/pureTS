module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "google", "plugin:react/recommended",],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: true,
        tsx: true,
      },
      sourceType: "module",
    },
  },
  plugins: ["@typescript-eslint", "import",  "react"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "valid-jsdoc": [
      "warn",
      {
        requireReturnType: false,
        requireParamType: false,
      },
    ],
    "require-jsdoc": [
      "warn",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    "max-len": ["error", { "code": 130 }]
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"],
  //     extends: [
  //       "plugin:@typescript-eslint/eslint-recommended",
  //       "prettier",
  //       "airbnb-base",
  //       "google",
  //     ],
  //     rules: {
  //       "import/extensions": [
  //         "error",
  //         "ignorePackages",
  //         {
  //           "js": "never",
  //           "jsx": "never",
  //           "ts": "never",
  //           "tsx": "never"
  //         }
  //       ]
  //     },
  //     parser: "@typescript-eslint/parser",
  //     plugins: ["@typescript-eslint"],
  //   },
  // ],
};
