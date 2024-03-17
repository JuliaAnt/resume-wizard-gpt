import styles from './page.module.css';
import {Button} from 'antd';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Button type='primary'>Button</Button>
      </div>
    </main>
  );
}
