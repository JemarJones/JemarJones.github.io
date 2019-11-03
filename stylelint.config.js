module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: ['include'],
      },
    ],
    'selector-class-pattern': [
      // Just a simple pattern to allow all the characters in BEM
      '^[a-zA-Z0-9_-]+$',
      {
        message: 'Class names should match the BEM CSS naming convention',
      },
    ],
  },
};
