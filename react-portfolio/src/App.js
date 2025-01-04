import logo from './logo.svg';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Avatar } from './components/Avatar/Avatar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
    </div>
  );
}

export default App;
