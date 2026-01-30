import { useState, useEffect } from 'react';

const SECTION_IDS = ['hero', 'projects', 'skills', 'about', 'contact'];

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute('id');
          if (id && SECTION_IDS.includes(id)) {
            setActiveId(id);
            break;
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
