/* eslint-disable import/prefer-default-export */
export const getVariation = (defaultClass, variationName) => {
  if (!variationName
    || variationName === 'none'
    || variationName === ''
  ) return defaultClass;

  if (Array.isArray(variationName)) {
    let name = defaultClass;

    variationName.forEach((variation) => {
      name += ` ${defaultClass}--${variation}`;
    });

    return name;
  }

  return `${defaultClass} ${defaultClass}--${variationName}`;
};
