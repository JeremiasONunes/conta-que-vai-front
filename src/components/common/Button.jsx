export const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};
