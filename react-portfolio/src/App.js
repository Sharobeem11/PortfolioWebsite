import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className={styles.footer}>
        <span className={styles.footerLogo}>M<span className={styles.footerAccent}>.</span>Sharobeem</span>
        <span className={styles.footerCopy}>© 2025 Michael Sharobeem. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
