

interface ExperienceItem {
    role: string;
    company: string;
    period?: string; // Optional if not provided
}

const EXPERIENCES: ExperienceItem[] = [
    {
        role: 'President',
        company: 'Icarus Oyun Geliştirme Topluluğu',
    },
    {
        role: 'VR Specialist',
        company: 'Health Institutes of Türkiye',
    },
    {
        role: 'Volunteer',
        company: 'TÜBİTAK',
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
