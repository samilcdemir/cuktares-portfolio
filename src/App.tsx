import { useGitHub } from './hooks/useGitHub';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

function App() {
  const { user, repos, loading, error } = useGitHub();

  return (
    <div className="min-h-screen bg-dark bg-grid-pattern bg-grid">
      <Nav />
      <main>
        <Hero user={user} loading={loading} />
        <Projects repos={repos} loading={loading} error={error} />
        <Skills repos={repos} />
        <Experience />
        <About />
        <Contact user={user} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
