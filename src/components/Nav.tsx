import { useState } from 'react';
import { IconButton } from './ui/IconButton';
import { NavLink } from './ui/NavLink';
import { useActiveSection } from '../hooks/useActiveSection';
import { siteConfig } from '../config';

export const NAV_LINKS = [
  { id: 'hero', label: 'Ana Sayfa' },
  { id: 'projects', label: 'Projeler' },
  { id: 'skills', label: 'Yetenekler' },
  { id: 'about', label: 'Hakkında' },
  { id: 'contact', label: 'İletişim' },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection();

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-5" aria-label="Ana navigasyon">
      {/* Floating pill bar */}
      <div className="max-w-4xl mx-auto rounded-full bg-dark/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] md:shadow-[0_4px 24px_rgba(225,29,72,0.08)]">
        <div className="flex items-center justify-between h-14 md:h-12 px-4 md:px-6">
          {/* Logo */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="flex items-center gap-2.5 shrink-0"
          >
            <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-display font-extrabold text-sm border border-accent/30">
              {siteConfig.shortName.charAt(0)}
            </span>
            <span className="font-display font-bold text-white text-lg tracking-wide hidden sm:inline">
              {siteConfig.shortName}
            </span>
          </a>

          {/* Desktop: links in pill */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.id}
                href={`#${link.id}`}
                label={link.label}
                isActive={activeId === link.id}
                variant="pill"
              />
            ))}
          </ul>

          {/* Mobile: menu button */}
          <IconButton
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden shrink-0"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile: dropdown */}
      <div
        className={`
          md:hidden mt-2 mx-2 overflow-hidden rounded-2xl
          bg-dark/95 backdrop-blur-xl border border-white/10
          transition-all duration-300 ease-out
          ${open ? 'max-h-80 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}
      >
        <ul className="py-3 px-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              isActive={activeId === link.id}
              onClick={closeMenu}
              variant="mobile"
            />
          ))}
        </ul>
      </div>
    </header>
  );
}
