import { siteConfig } from '../config';

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm font-body">
        © {new Date().getFullYear()} {siteConfig.fullName} · {siteConfig.role}
      </div>
    </footer>
  );
}
