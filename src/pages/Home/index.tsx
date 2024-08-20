import styles from './style.module.css';
import Timeline from '../../components/Timeline';
import { useEffect, useState } from 'react';
import { getYears } from '../../services/getYears';
import { DataItem } from '../../types/responseTypes';
import { Years } from '../../types/attributesTypes';
import ProjectsList from '../../components/Projects';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function MainPage() {
  const [selectedYear, setSelectedYear] = useState<DataItem<Years> | null>(
    null,
  );
  const [years, setYears] = useState<DataItem<Years>[]>([]);

  useEffect(() => {
    const getYearsData = async () => {
      const yearsData = await getYears();

      if (yearsData) {
        const sortedYearsData = yearsData.sort(
          (a: DataItem<Years>, b: DataItem<Years>) =>
            a.attributes.year - b.attributes.year,
        );

        setYears(sortedYearsData);
      }
    };

    getYearsData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <h1>Towards a Sustainable World.</h1>
        <img src="/home-image.png" alt="" />
      </div>

      <div id="mission" className={styles.mission}>
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

      <div id="projects" className={styles.projects}>
        <h2>Projects</h2>

        {years.length > 0 ? (
          <>
            <Timeline
              years={years}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />

            <ProjectsList year={selectedYear} />
          </>
        ) : (
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
          </div>
        )}
      </div>
    </main>
  );
}
