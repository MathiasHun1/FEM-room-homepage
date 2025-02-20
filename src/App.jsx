import styles from './App.module.scss';

import Interactive from './components/Interactive/Interactive';

function App() {
  return (
    <main className={styles.app}>
      <Interactive />

      <section className={styles.fix}></section>
    </main>
  );
}

export default App;
