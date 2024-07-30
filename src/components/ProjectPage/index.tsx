import { useEffect, useRef, useState } from 'react';
import { Project } from '../../types/attributesTypes';
import { DataItem } from '../../types/responseTypes';
import styles from './style.module.css';
import TeamPerson from '../TeamPerson';
import { Status } from '../../types/enums';

interface ProjectPageProps {
  project: DataItem<Project>;
  handleClose: () => void;
}

export default function ProjectPage({
  project,
  handleClose,
}: ProjectPageProps) {
  const backEndpoint = import.meta.env.VITE_BACK_ENDPOINT;
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (timelineRef.current) {
      const hasOverflow =
        timelineRef.current.scrollWidth > timelineRef.current.clientWidth;
      setShowButtons(hasOverflow);
      setIsOverflowing(hasOverflow);
    }
  };

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div
      className={styles.projectMainContainer}
      onClick={() => {
        handleClose();
      }}
    >
      <div
        className={styles.projectPageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.projectDetails}>
          <h1>{project.attributes.name}</h1>

          <div className={styles.statusContainer}>
            <div className={styles.status}>
              <div
                className={
                  project.attributes.status === Status.Progress
                    ? styles.statusChecked
                    : styles.statusUnchecked
                }
              ></div>
              <p>in progress</p>
            </div>

            <div className={styles.status}>
              <div
                className={
                  project.attributes.status === Status.Concluded
                    ? styles.statusChecked
                    : styles.statusUnchecked
                }
              ></div>
              <p>concluded</p>
            </div>
          </div>

          <p>{project.attributes.description}</p>
          {project.attributes.pictures.data && (
            <div className={styles.picturesWrapper}>
              {showButtons && (
                <button
                  className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
                  onClick={scrollLeft}
                >
                  <img src="/public/arrow-dark-cyan.svg" alt="back arrow" />
                </button>
              )}

              <div
                className={`${styles.picturesContainer} ${isOverflowing ? styles.overflow : styles.noOverflow}`}
                ref={timelineRef}
              >
                {project.attributes.pictures.data.map((picture) => (
                  <img
                    key={picture.id}
                    src={`${backEndpoint}${picture.attributes.url}`}
                    alt="Project Picture"
                    className={styles.picture}
                  />
                ))}
              </div>

              {showButtons && (
                <button
                  className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
                  onClick={scrollRight}
                >
                  <img src="/public/arrow-dark-cyan.svg" alt="next arrow" />
                </button>
              )}
            </div>
          )}

          <h2>Team</h2>
          <div className={styles.teamContainer}>
            {project.attributes.team.map((person, index) => (
              <TeamPerson key={`${person.id}-${index}`} person={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
