import "./Works.css";
import ImageSlider from "./ImageSlider";
import TechCarousel from "./TechCarousel";
import { FaNodeJs, FaReact, FaAws, FaStripe, FaDocker } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const images = [
  {
    src: "https://placehold.co/600x400?text=Image1",
    link: "#"
  },
  {
    src: "https://placehold.co/600x400?text=Image2",
    link: "#"
  },
  {
    src: "https://placehold.co/600x400?text=Image3",
    link: "#"
  }
];

const techStacks = [
  [
    { src: <FaReact />, name: "React" },
    { src: <FaNodeJs />, name: "Node.js" },
    { src: <FaAws />, name: "AWS" },
    { src: <BiLogoMongodb />, name: "MongoDB" }
  ],
  [
    { src: <FaStripe />, name: "Stripe" },
    { src: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { src: <FaDocker />, name: "Docker" },
    { src: <BiLogoRedux />, name: "Redux" }
  ]
  // Add more rows and technologies as needed
];

const Works = () => {
  return (
    <section id="works">
      <h3 className="title">Works</h3>

      <ImageSlider images={images} />
      <div className="tech-stack-slider">
        <h3 className="tech-stack-slider__title">
          I have built over 100+ projects using these technologies...
        </h3>
        {/* Slider carousel */}
        <TechCarousel rows={techStacks} />
      </div>
    </section>
  );
};
export default Works;

{
  /* <div className="works-grid bg_gradient">
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
</div> */
}
