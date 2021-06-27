import Navigation from '../Navigation';
import styles from './AppBar.module.css';

export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
