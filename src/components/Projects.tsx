import type { GitHubRepo } from '../types/github';

interface ProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500/20 text-blue-300',
  JavaScript: 'bg-yellow-500/20 text-yellow-300',
  Kotlin: 'bg-purple-500/20 text-purple-300',
  Java: 'bg-orange-500/20 text-orange-300',
  C: 'bg-gray-500/20 text-gray-300',
  'C#': 'bg-green-500/20 text-green-300',
  'C++': 'bg-pink-500/20 text-pink-300',
  Dart: 'bg-cyan-500/20 text-cyan-300',
  Go: 'bg-cyan-500/20 text-cyan-300',
  Rust: 'bg-orange-600/20 text-orange-300',
  PHP: 'bg-indigo-500/20 text-indigo-300',
  HTML: 'bg-orange-600/20 text-orange-300',
  'Visual Basic .NET': 'bg-blue-600/20 text-blue-300',
};

function langClass(lang: string | null): string {
  if (!lang) return 'bg-white/10 text-gray-400';
  return LANG_COLORS[lang] ?? 'bg-white/10 text-gray-400';
}

export function Projects({ repos, loading, error }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
          Projeler
        </h2>
        <p className="text-gray-400 font-body text-lg mb-12">
          GitHub&apos;daki public repolarım. Güncelleme tarihine göre sıralı.
        </p>

        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-48 rounded-xl bg-white/5 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="group rounded-xl bg-white/5 border border-white/10 p-6 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-lg text-white truncate">
                    {repo.name}
                  </h3>
                  {repo.stargazers_count > 0 && (
                    <span className="text-gray-500 text-sm shrink-0">
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm font-body line-clamp-2 mb-4 min-h-[2.5rem]">
                  {repo.description ?? '—'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${langClass(repo.language)}`}
                    >
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-body text-sm font-medium hover:underline"
                  >
                    Repo
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-body text-sm font-medium hover:underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
