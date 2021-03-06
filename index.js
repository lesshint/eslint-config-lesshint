module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 2015
  },
  "env": {
    "es6": true,
    "mocha": true,
    "node": true
  },
  "rules": {
    "array-bracket-spacing": "error",
    "arrow-body-style": ["error", "always"],
    "arrow-parens": "error",
    "brace-style": "error",
    "camelcase": "error",
    "comma-dangle": "off",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "curly": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "indent": ["error", 4, {
        "SwitchCase": 1,
        "VariableDeclarator": 0
    }],
    "key-spacing": "error",
    "keyword-spacing": ["error", {
        "after": true,
        "before": true
    }],
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-const-assign": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-var": "error",
    "prefer-const": "error",
    "quotes": ["error", "single", "avoid-escape"],
    "semi": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {
        "nonwords": false,
        "words": true
    }],
    "strict": ["error", "global"],
    "template-curly-spacing": ["error", "always"],
    "yoda": "error"
  }
};
