/* eslint-disable import/prefer-default-export */
export const getVariation = (defaultClass, variationName) => ((variationName !== 'none')
  ? `${defaultClass} ${defaultClass}--${variationName}`
  : `${defaultClass}`);
