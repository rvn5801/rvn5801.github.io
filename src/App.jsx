import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Learning from './components/Learning';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <Hero />
        <About />
      </div>
      <Experience />
      <Projects />
      <Learning />
      <Skills />
      <Hackathons />
      <Certifications />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
