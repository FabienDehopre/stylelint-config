// @ts-check
'use strict';

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // Restrict nesting:
    'selector-nested-pattern': [
      '^&:',
      {
        message: 'Only pseudo-classes and pseudo-elements can be nested (selector-nested-pattern)',
      },
    ],
    'scss/at-each-key-value-single-line': true,
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-pattern': [ // Prefer _ over - for private functions.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected function name to be kebab-case (private functions must start with _)',
      },
    ],
    'scss/at-mixin-argumentless-call-parentheses': 'always', // So it's always written the same way.
    'scss/at-mixin-named-arguments': ['never', { ignore: ['single-argument'] }],
    'scss/at-mixin-pattern': [ // Prefer _ over - for private mixins.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected mixin name to be kebab-case (private mixins must start with _)',
      },
    ],
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-empty-line-before': null, // Turn off to support grouping variables using empty lines.
    'scss/dollar-variable-pattern': [ // Prefer _ over - for private variables.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected variable to be kebab-case (private variables must start with _)',
      },
    ],
    'scss/no-duplicate-dollar-variables': true,
    'scss/percent-placeholder-pattern': [ // Prefer _ over - for private placeholders.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected placeholder to be kebab-case (private placeholders must start with _)',
      },
    ],
  },
};
