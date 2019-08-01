module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'vue/prop-name-casing':0,
    'vue/require-default-prop':0,
    'no-console':'off',
    'no-debugger': process.env.VUE_APP_CURRENTMODE === 'production' ? 'error' : 'off',
    'vue/html-self-closing':0,
    // allow async-await
    'generator-star-spacing': 'off',
    "no-control-regex": 0,
    // allow debugger during development
    "vue/max-attributes-per-line": [2, {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
  }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
