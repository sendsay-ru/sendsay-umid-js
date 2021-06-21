module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: [
    'eslint-plugin',
    'import',
    '@typescript-eslint',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    curly: ['error', 'all'],
    'eol-last': 'error',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-useless-escape': 'off',
    'no-underscore-dangle': 'off',
    'no-inner-declarations': 'off',
    'no-mixed-operators': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',

    'no-console': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],

    'arrow-body-style': 'off',

    'no-constant-condition': ['error', {
      checkLoops: false,
    }],

    'max-len': ['error', 140, 2, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],

    'no-unused-vars': ['error', {
      vars: 'all',
      varsIgnorePattern: '_([0-9]+)?$',
      args: 'after-used',
      argsIgnorePattern: '_([0-9]+)?$',
    }],

    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
  },

  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
