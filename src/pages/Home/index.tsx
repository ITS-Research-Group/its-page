import styles from './style.module.css';
import Timeline from '../../components/Timeline';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <h1>Towards a Sustainable World.</h1>
        <img src="/home-image.png" alt="" />
      </div>

      <div className={styles.mission}>
        <h2>Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          mollitia minus quod ea esse necessitatibus velit eligendi. Blanditiis
          voluptate cupiditate quaerat, aut cum aperiam a suscipit excepturi
          nemo earum et? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam esse obcaecati suscipit quaerat quo nesciunt delectus
          voluptatibus, placeat qui ab? Eius eveniet placeat ad nostrum
          perferendis, odit necessitatibus neque voluptas!
        </p>
      </div>

      <div className={styles.projects}>
        <h2>Projects</h2>
        <Timeline />
      </div>
    </main>
  );
}
