import { useEffect, useRef } from "react";

const TechCarousel = ({ rows, speed = 0.5 }) => {
  const carouselRefs = useRef([]);
  useEffect(() => {
    const animationFrameIds = [];

    const startScrolling = (carousel, direction) => {
      const speedMultiplier = direction === "left" ? 1 : -1;
      let scrollAmount = 0;
      const scrollWidth = carousel.scrollWidth / 2; // Scroll width of the original content

      const scroll = () => {
        scrollAmount += speed * speedMultiplier;
        if (scrollAmount >= scrollWidth || scrollAmount <= -scrollWidth) {
          scrollAmount = 0; // Reset scroll when reaching the end of the original content
        }
        carousel.style.transform = `translateX(${scrollAmount}px)`;
        animationFrameIds.push(requestAnimationFrame(scroll));
      };

      scroll();
    };

    // Start scrolling each carousel row in alternating directions
    carouselRefs.current.forEach((carousel, index) => {
      const direction = index % 2 === 0 ? "left" : "right";
      startScrolling(carousel, direction);
    });

    return () => {
      // Clean up animation frames on unmount
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, [speed]);

  return (
    <div className="carousel-container">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="carousel-row"
          ref={(el) => (carouselRefs.current[rowIdx] = el)}
        >
          {row.concat(row).map((tech, techIdx) => (
            <div key={techIdx} className="carousel-item">
              <span>{tech.src}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TechCarousel;
