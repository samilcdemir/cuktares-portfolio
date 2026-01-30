interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  /** default: underline, pill: rounded bg, mobile: full-width block */
  variant?: 'default' | 'pill' | 'mobile';
}

export function NavLink({ href, label, isActive = false, onClick, variant = 'default' }: NavLinkProps) {
  const base =
    'font-body text-sm font-medium transition-all duration-200 ' +
    (isActive
      ? 'text-accent'
      : 'text-gray-400 hover:text-accent');

  const layout =
    variant === 'mobile'
      ? 'block py-3 px-4 rounded-lg hover:bg-white/5'
      : variant === 'pill'
        ? `px-4 py-2 rounded-full ${isActive ? 'bg-accent/20 text-accent' : 'hover:bg-white/5'}`
        : 'inline-block py-2 pb-2.5';

  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`${base} ${layout} relative group`}
      >
        {label}
        {variant === 'default' && (
          <span
            className={`
              absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-200
              ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
          />
        )}
      </a>
    </li>
  );
}
