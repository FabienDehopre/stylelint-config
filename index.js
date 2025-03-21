// @ts-check
'use strict';

/** @type {import('stylelint').Config} */
module.exports = {
  ignoreFiles: ['**/*'],
  extends: ['stylelint-config-recess-order'],
  overrides: [
    {
      files: ['**/*.css', '**/*.scss'],
      rules: {
        'selector-class-pattern': [
          '^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?:__(?<element>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*))?(?:--(?<modifier>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*))?$',
          {
            message: 'Expected class selector to follow BEM naming convention.',
          },
        ],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep'] }],
        'color-named': 'never',
        'font-weight-notation': 'named-where-possible',
        'declaration-no-important': true,
        'max-nesting-depth': [2, { ignore: ['blockless-at-rules'] }], // Because too complex nesting is hard to read.
        'declaration-property-value-disallowed-list': [
          {
            '/^background/': [ // Background images should be stored locally.
              'http:',
              'https:',
            ],
            '/^transition/': [ // Only hardware-accelerable properties should be transitioned.
              '/all/',
            ],
          },
          {
            message: 'Transitioning all properties and absolute background URLs are ' +
              'not allowed (declaration-property-value-disallowed-list)',
          },
        ],
        'selector-max-compound-selectors': 3, // Keep selector specificity as low as possible by default.
        'selector-max-id': 0, // In most cases, IDs are for JavaScript, not CSS.
        'selector-max-specificity': '0,4,0', // Keep selector specificity as low as possible by default.
        'selector-max-universal': 0, // Most of the time, we should know what elements or classes we are targeting.
        'selector-no-qualifying-type': true, // In most cases, it only needlessly increases selector specificity.
      },
    },
    {
      files: ['**/*.css'],
      extends: ['stylelint-config-standard'],
      rules: {
        'number-max-precision': [3, { ignoreProperties: ['background-position'] }],
      },
    },
    {
      files: ['**/*.scss'],
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
    },
  ],
};
