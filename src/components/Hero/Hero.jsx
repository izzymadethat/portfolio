import Badge from "../Badge/Badge";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div>
        <h4 className="hero__title">Welcome, 👐🏾 I&apos;m</h4>
        <h1 className="hero__title--name">Isaiah</h1>
      </div>
      <p>
        I&apos;m an innovative full-stack web app developer, backend systems
        architect, analyst, and professional musician. I bring sight to visions!
      </p>
      <div className="hero__cta">
        <button className="btn-outline">Download My Resume</button>
        <Badge />
      </div>
    </section>
  );
};
export default Hero;
