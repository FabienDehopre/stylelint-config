// @ts-check
'use strict';

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-named': 'never',
    'declaration-no-important': true,
    'font-weight-notation': 'named-where-possible',
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
    'max-nesting-depth': [2, { ignore: ['blockless-at-rules'] }], // Because too complex nesting is hard to read.
    'number-max-precision': [3, { ignoreProperties: ['background-position'] }],
    'selector-class-pattern': [
      '^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?:__(?<element>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*))?(?:--(?<modifier>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*))?$',
      {
        message: 'Expected class selector to follow BEM naming convention.',
      },
    ],
    'selector-max-compound-selectors': 3, // Keep selector specificity as low as possible by default.
    'selector-max-id': 0, // In most cases, IDs are for JavaScript, not CSS.
    'selector-max-specificity': '0,4,0', // Keep selector specificity as low as possible by default.
    'selector-max-universal': 0, // Most of the time, we should know what elements or classes we are targeting.
    'selector-no-qualifying-type': true, // In most cases, it only needlessly increases selector specificity.
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep'] }],
  },
};
