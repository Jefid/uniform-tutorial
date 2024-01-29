module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    'prettier/prettier': 'off',
    'no-underscore-dangle': 'off',
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArrowFunction: true,
      },
    ],
    'react/display-name': 'off',
  },
};
