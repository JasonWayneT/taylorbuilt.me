import { Link } from 'react-router-dom';

export default function TextLink({ to, href, variant = 'internal', children }) {
  const base = 'inline-flex items-center gap-2 text-primary font-manrope font-semibold hover:gap-3 transition-all no-underline';
  if (variant === 'external') {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
        <span className="material-symbols-outlined text-sm">north_east</span>
      </a>
    );
  }
  return (
    <Link to={to} className={base}>
      {children}
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </Link>
  );
}
