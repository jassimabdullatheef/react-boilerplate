module.exports = {
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
      "no-var": "off",
      "comma-dangle": ["error", "never"],
        "max-len": ["error", 100],
        "require-jsdoc": 0,
        "react/prop-types": 0
    },
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "settings": {
        "react": {
            "version": "16.0"
        }
    },
      
};