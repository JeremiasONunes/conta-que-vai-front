export const Link = ({ href, children, mobile = false }) => {
  const baseClasses = "font-medium transition-all duration-300";
  const desktopClasses = "text-primary-deep/80 hover:text-accent-purple";
  const mobileClasses = "text-primary-deep/80 hover:text-accent-purple py-2";

  return (
    <a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </a>
  );
};
