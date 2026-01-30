import { useTranslation } from 'react-i18next';
import type { GitHubRepo } from '../types/github';

interface SkillsProps {
  repos: GitHubRepo[];
}

export function Skills({ repos }: SkillsProps) {
  const { t } = useTranslation();

  const languages = Array.from(
    new Set(repos.map((r) => r.language).filter(Boolean) as string[])
  ).sort();

  const gameRelated = [
    'Unity (6 years+)',
    'Godot (2y+)',
    'Unreal Engine (1y)',
    'Virtual Reality (VR)',
    'C#',
    'Product Management',
    'Game Development',
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
          {t('skills.title')}
        </h2>
        <p className="text-gray-400 font-body text-lg mb-12">
          {t('skills.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-accent text-sm uppercase tracking-widest mb-4">
              {t('skills.github_langs')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-body text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-accent text-sm uppercase tracking-widest mb-4">
              {t('skills.game_dev')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {gameRelated.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-accent/15 border border-accent/30 text-accent font-body text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
