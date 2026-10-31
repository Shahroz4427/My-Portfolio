import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CERTS, EDU, EMAIL, GITHUB, JOBS, LINKEDIN, PHONES, PROJECTS, SKILLS } from "../data";
import ProjectCard from "./ProjectCard";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const reveal = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.7, ease: "easeOut" } };
const Head = ({ n, title }) => (
  <motion.div className="head" {...reveal}><span>{n}</span><h2>{title}</h2></motion.div>
);

export function About() {
  return (
    <section id="about">
      <Head n="01" title="About" />
      <div className="two">
        <motion.div {...reveal}>
          <p className="big">Versatile Full-Stack Developer specializing in modern, responsive, and scalable web and mobile applications.</p>
          <p>Experienced in working with React.js, Vue.js, Laravel, PHP, Flutter, and MySQL to build efficient, user-focused software solutions. Strong understanding of application development, problem-solving, debugging, and performance optimization, with a focus on writing clean, maintainable code.</p>
          <p>Adaptable and detail-oriented, with a passion for learning new technologies, overcoming technical challenges, and delivering reliable solutions that create real business value.</p>
        </motion.div>
        <motion.div className="glass facts" {...reveal} transition={{ ...reveal.transition, delay: 0.15 }}>
          <div><small>Location</small>Karachi, Pakistan</div>
          <div><small>Focus</small>Fullstack web &amp; cross-platform apps</div>
          <div><small>Education</small>Advance Diploma in Software Engineering, Aptech</div>
          <div><small>Strengths</small>Problem-solving · Attention to detail · Performance optimization · Fast learner</div>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  const all = SKILLS.flatMap(([, v]) => v);
  const row = [...all, ...all, ...all, ...all];
  return (
    <section id="skills">
      <Head n="02" title="Tech stack" />
      <div className="marquee" aria-hidden="true"><div>{row.map((s, i) => <span key={i}>{s}</span>)}</div></div>
      <div className="skgrid">
        {SKILLS.map(([k, v], i) => (
          <motion.div className="glass sk" key={k} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} whileHover={{ y: -6 }}>
            <small>{k}</small>
            <div>{v.map((x) => <b key={x}>{x}</b>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <Head n="03" title="Selected work" />
      <div className="pgrid">{PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}</div>
      <motion.p className="more" {...reveal}>
        More on <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
      </motion.p>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <Head n="04" title="Experience" />
      <div className="tl">
        {JOBS.map((j) => (
          <motion.div className="job glass" key={j.t} {...reveal}>
            <div className="jh"><div><h3>{j.t}</h3><em>{j.c}</em></div><span>{j.d}</span></div>
            <ul>{j.b.map((b) => <li key={b}>{b}</li>)}</ul>
          </motion.div>
        ))}
      </div>
      <div className="two edu">
        <motion.div {...reveal}>
          <h4>Education</h4>
          {EDU.map(([a, b]) => <p key={a}><b>{a}</b><small>{b}</small></p>)}
        </motion.div>
        <motion.div {...reveal}>
          <h4>Certifications</h4>
          {CERTS.map(([a, b, c]) => <p key={a}><b>{a}</b><small>{b} — {c}</small></p>)}
        </motion.div>
      </div>
    </section>
  );
}

function Magnetic({ children }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  return (
    <motion.div ref={ref} style={{ x, y, display: "inline-block" }}
      onPointerMove={(e) => { const r = ref.current.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.3); }}
      onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <Head n="05" title="Contact" />
      <motion.h3 className="cta-h" {...reveal}>Let’s build something <em>great</em> together.</motion.h3>
      <motion.div className="cta" {...reveal}>
        <Magnetic><a className="btn primary" href={`mailto:${EMAIL}`}>{EMAIL}</a></Magnetic>
        <Magnetic><a className="btn" href={GITHUB} target="_blank" rel="noreferrer"><GitHubIcon size={18} /> GitHub</a></Magnetic>
        <Magnetic><a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer"><LinkedInIcon size={18} /> LinkedIn</a></Magnetic>
      </motion.div>
      <motion.p className="phones" {...reveal}>
        {PHONES.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>)}
      </motion.p>
      <footer>© {new Date().getFullYear()} Shahroz · Karachi, Pakistan</footer>
    </section>
  );
}
