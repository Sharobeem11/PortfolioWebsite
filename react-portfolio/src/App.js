import logo from './logo.svg';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Avatar } from './components/Avatar/Avatar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
