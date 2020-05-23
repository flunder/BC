module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        'linebreak-style': [ 'error', 'unix' ],
        "no-undef": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/prop-types": "off",
        indent: [ 'error', 4, { SwitchCase: 1 } ],
        semi: [ 'off' ],
    }
}
