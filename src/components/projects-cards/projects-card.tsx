import './projects-card.css';

type ComponentProps = {
  name: string;
  screenshot: string;
  description: string;
};

function ProjectsCard(props: ComponentProps) {
  return (
    <div className="projects-card" id={props.name}>
      <div className="projects-card__background"></div>
      <div className="projects-card__box">
        <div
          className="projects-card__image"
          style={{ backgroundImage: `url(${props.screenshot})` }}
        >
          <div className="projects-card__tech-box">
            <span className="projects-card__tech text-color-white">JS</span>
            <span className="projects-card__tech text-color-white">TS</span>
            <span className="projects-card__tech text-color-white">WP</span>
            <span className="projects-card__tech text-color-white">REACT</span>
            <span className="projects-card__tech text-color-white">REDUX</span>
          </div>
        </div>
        <div className="projects-card__info-box">
          <h2 className="projects-card__name text-color-peperment ">{props.name}</h2>
          <span className="projects-card__description text-color-white">{props.description}</span>
          <a className="projects-card__github text-color-gray" href="https://github.com/LoginamNet">
            GitHub Link
          </a>
        </div>
        <div
          className="projects-card__button-box"
          onClick={() => (window.location.href = 'https://github.com/LoginamNet')}
        >
          <span className="projects-card__description text-color-white">deploy</span>
          <div className="projects-card__button">
            <div className="projects-card__button-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
