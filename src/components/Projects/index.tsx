import styles from './style.module.css';
import { Project, Years } from '../../types/attributesTypes';
import { DataItem } from '../../types/responseTypes';
import ProjectCard from '../ProjectCard';
import { useEffect, useState } from 'react';
import { getProjectsByYear } from '../../services/getProjects';
import ProjectPage from '../ProjectPage';
import LoadingSpinner from '../LoadingSpinner';

interface ProjectsProps {
  year: DataItem<Years> | null;
}

export default function ProjectsList({ year }: ProjectsProps) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<DataItem<Project>[]>([]);
  const [selectedProject, setSelectedProject] =
    useState<DataItem<Project> | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      if (year) {
        setLoading(true);
        const projectsData = await getProjectsByYear(year.id);

        if (projectsData) setProjects(projectsData);
        setLoading(false);
      }
    };

    getProjects();
  }, [year]);

  const handleOpenProjectDetails = (project: DataItem<Project>) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projectsContainer}>
      {year ? (
        <>
          <div className={styles.yearDetails}>
            <div className={styles.halfCircle}></div>
            <div className={styles.details}>
              <h3>{year.attributes.year}</h3>
              <p>{year.attributes.description}</p>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              {projects.length > 0 ? (
                <div className={styles.projects}>
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={`${project.id}-${index}`}
                      project={project}
                      handleClick={handleOpenProjectDetails}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.notFoundContainer}>
                  <img src="/mascot.png" alt="mascot its" />
                  <p>O ano selecionado não possui projetos.</p>
                </div>
              )}
            </>
          )}

          {selectedProject && (
            <ProjectPage
              project={selectedProject}
              handleClose={handleCloseProjectDetails}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
