import { useTranslation } from 'react-i18next';
import type { GitHubUser } from '../types/github';
import { siteConfig } from '../config';

interface HeroProps {
  user: GitHubUser | null;
  loading: boolean;
}

export function Hero({ user, loading }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 text-center max-w-3xl">
        {loading ? (
          <div className="h-24 w-24 mx-auto rounded-full bg-white/10 animate-pulse" />
        ) : user?.avatar_url ? (
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="h-28 w-28 mx-auto rounded-full border-2 border-accent/50 shadow-[0_0_30px_rgba(225,29,72,0.3)] object-cover animate-float"
          />
        ) : null}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mt-6 tracking-tight">
          {siteConfig.fullName}
        </h1>
        <p className="font-display text-accent text-xl sm:text-2xl mt-2 tracking-widest uppercase">
          {t('hero.role')}
        </p>
        <p className="text-gray-400 mt-6 text-lg font-body max-w-xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-white font-display font-bold text-sm uppercase tracking-wider rounded hover:bg-accentDim transition-colors shadow-[0_0_20px_rgba(225,29,72,0.3)]"
          >
            {t('hero.cta_projects')}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent/50 text-accent font-display font-bold text-sm uppercase tracking-wider rounded hover:bg-accent/20 transition-colors"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
