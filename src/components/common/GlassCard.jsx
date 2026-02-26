export const GlassCard = ({ children, className = '', hover = false }) => {
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-glow cursor-pointer' : '';
  
  return (
    <div className={`glass-card p-6 transition-all duration-300 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
