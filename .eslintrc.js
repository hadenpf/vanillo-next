module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': (process.env.NODE_ENV === 'production') ? 'error' : 'off',
        'no-debugger': (process.env.NODE_ENV === 'production') ? 'error' : 'off',
        'quotes': ['warn', 'single'],
        'indent': ['warn', 4, {
            SwitchCase: 1
        }],
        'no-unused-vars': ['warn'],
        'comma-dangle': ['warn', 'never'],
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'arrow-body-style': ['warn', 'as-needed'],
        'curly': ['warn', 'multi-line'],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
        'semi': ['error', 'never'],
        'arrow-parens': ['error', 'always']
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}