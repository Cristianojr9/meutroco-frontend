module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": ["error", "windows"],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
    }
};
