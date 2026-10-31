import { motion } from "framer-motion";
import { GITHUB, LINKEDIN } from "../data";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const letter = {
  h: { y: "115%", rotate: 10 },
  s: { y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
};
const rise = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.7, ease: "easeOut" } });

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.p className="eyebrow" {...rise(0.1)}>Hello, I’m</motion.p>
      <motion.h1 initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }} aria-label="Shahroz">
        {"Shahroz".split("").map((c, i) => (
          <span className="ch" key={i}><motion.span variants={letter}>{c}</motion.span></span>
        ))}
      </motion.h1>
      <motion.h2 className="role" {...rise(0.9)}>Fullstack <em>Web Developer</em></motion.h2>
      <motion.p className="lead" {...rise(1.05)}>
        I build modern, responsive and scalable web and mobile apps with React, Vue, Laravel, PHP and Flutter.
      </motion.p>
      <motion.div className="cta" {...rise(1.2)}>
        <a className="btn primary" href="#projects">View my work</a>
        <a className="btn" href="#contact">Get in touch</a>
        <a className="btn round" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a className="btn round" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      </motion.div>
      <motion.div className="cue" {...rise(1.6)}><span /> scroll</motion.div>
    </section>
  );
}
