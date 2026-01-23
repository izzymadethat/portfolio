"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect for stars
  const y1 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -450]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      phase: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Star canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />

      {/* Celestial objects: This one is a large nebula */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-20 -right-40 size-150 rounded-full opacity-20"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="size-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.18 300 / 0.4), oklch(0.35 0.12 280 / 0.2), transparent 70%)",
          }}
        />
      </motion.div>
      {/* Celestial body 2 - Smaller galaxy */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -left-20 size-100 rounded-full opacity-15"
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.15 85 / 0.3), oklch(0.55 0.18 300 / 0.15), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Celestial body 3 - Deep space cluster */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[70%] right-[10%] size-75 rounded-full opacity-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.50 0.15 200 / 0.5), oklch(0.35 0.12 280 / 0.2), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Floating space debris */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-foreground/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
