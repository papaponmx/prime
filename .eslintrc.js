{
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "jsx-quotes": [
      1,
      "prefer-single"
    ],
    "space-before-function-paren": [
      1,
      "never"
    ],
    "react/prop-types": [
      0
    ],
    "react/forbid-prop-types": [
      0
    ],
    "no-console": [
      0
    ],
    "comma-dangle": [
      2,
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "ignore",
        "exports": "ignore",
        "functions": "ignore"
      }
    ]
  },
  "settings": {  }
}
