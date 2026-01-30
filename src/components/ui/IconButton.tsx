import type { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  'aria-label': string;
  className?: string;
  type?: 'button' | 'submit';
}

export function IconButton({
  children,
  onClick,
  'aria-label': ariaLabel,
  className = '',
  type = 'button',
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        p-2 rounded-lg text-gray-400 hover:text-accent
        focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark
        transition-colors
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
}
