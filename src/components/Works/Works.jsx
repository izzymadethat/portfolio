import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./Works.css";

const Works = () => {
  return (
    <section className="works" id="works">
      <h3 className="title">Works</h3>
      <div className="works-grid bg_gradient">
        <BiChevronLeft />
        <BiChevronRight />
        <article className="portfolio-card">
          <div className="portfolio-card__image-container">
            <img src="https://placehold.co/600x400" alt="" />
          </div>
          <h4 className="portfolio-card__title">Portfolio</h4>
          <p className="portfolio-card__description">
            A portfolio site to showcase my projects and skills. This project
            was built using React and Vite.
          </p>
        </article>
      </div>
      <div className="tech-stack-slider">
        <h3 className="tech-stack-slider__title">
          I have built over 100+ projects using these technologies...
        </h3>
        <div className="tech-stack-slider__slider"></div>
      </div>
    </section>
  );
};
export default Works;
