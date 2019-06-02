module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off'
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
