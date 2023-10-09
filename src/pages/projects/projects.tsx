import { useEffect, useState } from 'react';

import Preloader from '../../components/preloader/preloader';
import ProjectsTitle from '../../components/projects-title/projects-title';
import ProjectsCards from '../../components/projects-cards/projects-cards';
import CVContacts from '../../components/cv-contacts/cv-contacts';

function Projects() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isPreloadesDisplayed, setIsPreloadesDisplayed] = useState(true);

  useEffect(() => {
    const preloader = setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(preloader);
      setIsPageLoaded(false);
    };
  }, [setIsPageLoaded]);

  return (
    <>
      {isPreloadesDisplayed && (
        <Preloader isPageLoaded={isPageLoaded} setIsPreloadesDisplayed={setIsPreloadesDisplayed} />
      )}
      <ProjectsTitle isPageLoaded={isPageLoaded} />
      <ProjectsCards />
      <CVContacts />
    </>
  );
}

export default Projects;
