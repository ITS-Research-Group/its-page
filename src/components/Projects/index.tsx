import styles from './style.module.css';
import { Years } from '../../types/attributesTypes';
import { DataItem } from '../../types/responseTypes';

interface ProjectsProps {
  year: DataItem<Years> | null;
}
export default function Projects({ year }: ProjectsProps) {
  return (
    <div className={styles.projects}>
      {year ? (
        <div className={styles.yearDetails}>
          <div className={styles.halfCircle}></div>
          <div className={styles.details}>
            <h3>{year.attributes.year}</h3>
            <p>{year.attributes.description}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
