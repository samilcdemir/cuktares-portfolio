import { useState, useEffect } from 'react';
import type { GitHubRepo, GitHubUser } from '../types/github';
import { siteConfig } from '../config';

const GITHUB_USER = siteConfig.githubUsername;
const USER_URL = `https://api.github.com/users/${GITHUB_USER}`;
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`;

export function useGitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(USER_URL),
          fetch(REPOS_URL),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API hatası');
        }

        const [userData, reposData] = await Promise.all([
          userRes.json() as Promise<GitHubUser>,
          reposRes.json() as Promise<GitHubRepo[]>,
        ]);

        setUser(userData);
        setRepos(reposData.filter((r) => !r.fork));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Bilinmeyen hata');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { user, repos, loading, error };
}
