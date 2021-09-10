import { getVariation } from '../utils/global-functions';

export default function CategoryLink({
  Component = 'div',
  children,
  highlight = false,
  ...props
}) {
  return (
    <Component
      className={getVariation('category-link', highlight ? 'highlighted' : 'none')}
      {...props}
    >
      {children}
    </Component>
  );
}
