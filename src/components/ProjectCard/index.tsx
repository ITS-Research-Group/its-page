import { Project } from '../../types/attributesTypes';
import { DataItem } from '../../types/responseTypes';
import styles from './style.module.css';

interface ProjectCardProps {
  project: DataItem<Project>;
  handleClick: (project: DataItem<Project>) => void;
}

export default function ProjectCard({
  project,
  handleClick,
}: ProjectCardProps) {
  const backEndpoint = import.meta.env.VITE_BACK_ENDPOINT;

  return (
    <div className={styles.projectCard}>
      {project && (
        <>
          <div
            className={`${styles.imageContainer} ${!project.attributes.cover.data ? styles.withoutImage : ''}`}
            onClick={() => {
              handleClick(project);
            }}
          >
            {project.attributes.cover.data ? (
              <img
                className={styles.image}
                src={`${backEndpoint}${project.attributes.cover.data.attributes.url}`}
                alt="Project Cover"
              />
            ) : (
              <img src="/no-image.svg" alt="" />
            )}
            <p className={styles.title}>{project.attributes.name}</p>
          </div>

          <div
            className={styles.description}
            onClick={() => {
              handleClick(project);
            }}
          >
            <p>{project.attributes.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
