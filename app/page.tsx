import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to My Blog</h1>
      <form>
        <input name="date" placeholder="DATE" />
        <input name="title" placeholder="TITLE" />
        <input name="text" placeholder="TEXT" />
      </form>
    </main>
  );
}
