
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
    roleKey: string;
    company: string;
    period: string;
}

const EXPERIENCES: ExperienceItem[] = [
    {
        roleKey: 'founder',
        company: 'Ash & Pause',
        period: 'Haz 2025 - Halen',
    },
    {
        roleKey: 'instructor',
        company: 'Game Design Academia',
        period: 'Oca 2026 - Halen',
    },
    {
        roleKey: 'president',
        company: 'Icarus OGPT',
        period: 'Kas 2023 - Halen',
    },
    {
        roleKey: 'vr_specialist',
        company: 'Health Institutes of Türkiye',
        period: 'Eki 2024 - Halen',
    },
    {
        roleKey: 'board_member',
        company: 'Bilgisayar ve Bilişim Teknolojileri Kulübü',
        period: 'Eki 2025 - Halen',
    },
    {
        roleKey: 'tech_lead',
        company: 'HUAWEI Student Developers (HSD) Türkiye',
        period: 'Tem 2025 - Halen',
    },
    {
        roleKey: 'exec_board_member',
        company: 'ESOES',
        period: 'Tem 2025 - Halen',
    },
    {
        roleKey: 'game_dev',
        company: 'Negentra',
        period: 'Ağu 2025 - Eyl 2025',
    },
    {
        roleKey: 'volunteer',
        company: 'TÜBİTAK',
        period: 'Kas 2024 - May 2025',
    },
    {
        roleKey: 'event_coord',
        company: 'Sinema Osmangazi',
        period: 'Ara 2023 - May 2024',
    },
    {
        roleKey: 'sales',
        company: 'Çetinkaya',
        period: 'Mar 2023 - Eyl 2023',
    },
];

export function Experience() {
    const { t, i18n } = useTranslation();

    const formatPeriod = (period: string) => {
        // Very basic replace for "Halen" to "Present" if en
        if (i18n.language === 'en') {
            return period.replace('Halen', 'Present')
                .replace('Haz', 'Jun').replace('Oca', 'Jan').replace('Kas', 'Nov')
                .replace('Eki', 'Oct').replace('Tem', 'Jul').replace('Ağu', 'Aug')
                .replace('Eyl', 'Sep').replace('May', 'May').replace('Ara', 'Dec')
                .replace('Mar', 'Mar');
        }
        return period;
    };

    return (
        <section id="experience" className="py-24 px-4 relative bg-white/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-16 text-center">
                    {t('experience.title')}
                </h2>

                <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 sm:pl-12 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent box-content border-4 border-[#1a1a1a] shadow-[0_0_10px_rgba(225,29,72,0.5)]" />

                            {/* Content Card */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-6 rounded-xl bg-dark/50 border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all duration-300 group">
                                <div>
                                    <h3 className="text-xl font-bold text-white font-display mt-[-4px]">
                                        {t(`experience.roles.${exp.roleKey}`)}
                                    </h3>
                                    <div className="text-accent font-medium mt-1 group-hover:text-accentDim transition-colors">
                                        {exp.company}
                                    </div>
                                </div>
                                {exp.period && (
                                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 shrink-0">
                                        {formatPeriod(exp.period)}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
