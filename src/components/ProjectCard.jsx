import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5), y = useMotionValue(0.5);
  const cfg = { stiffness: 180, damping: 18 };
  const rx = useSpring(useTransform(y, [0, 1], [7, -7]), cfg);
  const ry = useSpring(useTransform(x, [0, 1], [-7, 7]), cfg);

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const leave = () => { x.set(0.5); y.set(0.5); };

  return (
    <motion.article ref={ref} className="card" onPointerMove={move} onPointerLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: "easeOut" }}>
      <div className="shot" tabIndex={0} role="img" aria-label={`${p.title} screenshot`}
        style={p.image ? { backgroundImage: `url("${p.image}")` } : undefined}>
        <span className="num">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <div className="cb">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="links">
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
          {p.source && <a href={p.source} target="_blank" rel="noreferrer">Source ↗</a>}
        </div>
      </div>
    </motion.article>
  );
}
