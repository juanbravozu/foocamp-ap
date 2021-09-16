import React from 'react';
import { getVariation } from '../utils/global-functions';

export default React.forwardRef(({
  Component = 'div',
  children,
  highlight = false,
  ...props
}, ref) => (
  <Component
    className={getVariation('category-link', highlight ? 'highlighted' : 'none')}
    {...props}
    ref={ref}
  >
    {children}
  </Component>
));
