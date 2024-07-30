import { TeamMember } from '../../types/attributesTypes';
import styles from './style.module.css';

interface TeamPersonProps {
  person: TeamMember;
}

export default function TeamPerson({ person }: TeamPersonProps) {
  const backEndpoint = import.meta.env.VITE_BACK_ENDPOINT;

  return (
    <div className={styles.personCantainer}>
      <div
        className={`${styles.imageContainer} ${!person.person.data.attributes.image.data ? styles.withoutImage : ''}`}
      >
        {person.person.data.attributes.image.data ? (
          <img
            className={styles.image}
            src={`${backEndpoint}${person.person.data.attributes.image.data.attributes.url}`}
            alt="Project Cover"
          />
        ) : null}

        <p>{person.person.data.attributes.name}</p>
      </div>

      <div className={styles.description}>
        <p>{person.person.data.attributes.description}</p>
      </div>
    </div>
  );
}
