import styles from './App.module.scss';

import Interactive from './components/Interactive/Interactive';
import Static from './components/Static/Static';

function App() {
  return (
    <main className={styles.app}>
      <Interactive />
      <Static />
    </main>
  );
}

export default App;
