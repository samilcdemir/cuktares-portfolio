

interface ExperienceItem {
    role: string;
    company: string;
    period?: string; // Optional if not provided
}

const EXPERIENCES: ExperienceItem[] = [
    {
        role: 'Founder',
        company: 'Ash & Pause',
        period: 'Haz 2025 - Halen',
    },
    {
        role: 'Instructor',
        company: 'Game Design Academia',
        period: 'Oca 2026 - Halen',
    },
    {
        role: 'President',
        company: 'Icarus OGPT',
        period: 'Kas 2023 - Halen',
    },
    {
        role: 'VR Specialist',
        company: 'Health Institutes of Türkiye',
        period: 'Eki 2024 - Halen',
    },
    {
        role: 'Board Member',
        company: 'Bilgisayar ve Bilişim Teknolojileri Kulübü',
        period: 'Eki 2025 - Halen',
    },
    {
        role: 'Teknik Takım Lideri',
        company: 'HUAWEI Student Developers (HSD) Türkiye',
        period: 'Tem 2025 - Halen',
    },
    {
        role: 'Executive Board Member',
        company: 'ESOES',
        period: 'Tem 2025 - Halen',
    },
    {
        role: 'Game Developer',
        company: 'Negentra',
        period: 'Ağu 2025 - Eyl 2025',
    },
    {
        role: 'Volunteer',
        company: 'TÜBİTAK',
        period: 'Kas 2024 - May 2025',
    },
    {
        role: 'Event Coordinator',
        company: 'Sinema Osmangazi',
        period: 'Ara 2023 - May 2024',
    },
    {
        role: 'Sales Specialist',
        company: 'Çetinkaya',
        period: 'Mar 2023 - Eyl 2023',
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 relative bg-white/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                    Deneyim
                </h2>
                <div className="space-y-4">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center sm:justify-between p-6 rounded-xl bg-dark/50 border border-white/5 hover:border-accent/40 transition-colors"
                        >
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl font-bold text-white font-display">
                                    {exp.role}
                                </h3>
                                <div className="text-accent font-medium mt-1">
                                    {exp.company}
                                </div>
                            </div>
                            {exp.period && (
                                <div className="text-gray-400 text-sm mt-2 sm:mt-0 font-body background-black/20 px-3 py-1 rounded-full border border-white/5">
                                    {exp.period}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
