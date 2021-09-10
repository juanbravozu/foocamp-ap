import { getVariation } from '../utils/global-functions';

export default function Chip({
  Component = 'div',
  children,
  highlight = false,
  ...props
}) {
  return (
    <Component
      className={getVariation('chip', highlight ? 'highlighted' : 'none')}
      {...props}
    >
      {children}
    </Component>
  );
}
