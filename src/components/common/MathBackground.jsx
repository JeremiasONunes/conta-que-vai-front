export const MathBackground = () => {
  const expressions = [
    { text: 'x² + 2x + 1', top: '10%', left: '5%', rotate: '-15deg', opacity: 0.08 },
    { text: '∫ f(x)dx', top: '20%', right: '10%', rotate: '12deg', opacity: 0.06 },
    { text: 'a² + b² = c²', top: '35%', left: '15%', rotate: '8deg', opacity: 0.07 },
    { text: 'π ≈ 3.14159', top: '50%', right: '8%', rotate: '-10deg', opacity: 0.08 },
    { text: 'y = mx + b', top: '65%', left: '10%', rotate: '15deg', opacity: 0.06 },
    { text: '√(x² + y²)', top: '75%', right: '15%', rotate: '-8deg', opacity: 0.07 },
    { text: 'Σ(n=1→∞)', top: '15%', left: '85%', rotate: '10deg', opacity: 0.06 },
    { text: 'lim x→∞', top: '80%', left: '70%', rotate: '-12deg', opacity: 0.08 },
  ];

  const symbols = [
    { text: '+', top: '8%', left: '25%', size: '4rem', opacity: 0.05 },
    { text: '−', top: '25%', left: '75%', size: '4rem', opacity: 0.05 },
    { text: '×', top: '45%', left: '5%', size: '3.5rem', opacity: 0.06 },
    { text: '÷', top: '60%', right: '5%', size: '3.5rem', opacity: 0.05 },
    { text: '=', top: '85%', left: '40%', size: '4rem', opacity: 0.06 },
    { text: '≠', top: '30%', right: '25%', size: '3rem', opacity: 0.05 },
    { text: '≤', top: '70%', left: '50%', size: '3rem', opacity: 0.06 },
    { text: '≥', top: '40%', left: '60%', size: '3rem', opacity: 0.05 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {expressions.map((expr, index) => (
        <div
          key={`expr-${index}`}
          className="absolute font-mono font-bold text-primary-deep"
          style={{
            top: expr.top,
            left: expr.left,
            right: expr.right,
            transform: `rotate(${expr.rotate})`,
            opacity: expr.opacity,
            fontSize: '1.5rem',
          }}
        >
          {expr.text}
        </div>
      ))}
      {symbols.map((symbol, index) => (
        <div
          key={`symbol-${index}`}
          className="absolute font-bold text-accent-yellow"
          style={{
            top: symbol.top,
            left: symbol.left,
            right: symbol.right,
            fontSize: symbol.size,
            opacity: symbol.opacity,
          }}
        >
          {symbol.text}
        </div>
      ))}
    </div>
  );
};
