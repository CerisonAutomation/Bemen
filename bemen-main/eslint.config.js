import next from 'eslint-config-next';

export default [
  ...next(),
  {
    rules: {
      // Add or adjust rules as needed for deployment safety
      '@next/next/no-html-link-for-pages': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      'no-console': 'warn',
    },
  },
];
