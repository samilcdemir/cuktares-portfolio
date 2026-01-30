import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
          {t('about.title')}
        </h2>

        <blockquote className="text-2xl sm:text-3xl font-display font-bold text-accent mb-12 italic">
          {t('about.quote')}
        </blockquote>

        <div className="space-y-6 text-gray-400 font-body text-lg leading-relaxed">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </div>
    </section>
  );
}
