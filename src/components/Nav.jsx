import { motion } from "framer-motion";
import { GITHUB, LINKEDIN } from "../data";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Nav({ bar }) {
  return (
    <motion.header className="nav" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, type: "spring", damping: 20 }}>
      <a href="#top" className="logo">sk<span>.</span></a>
      <nav>
        {["about", "skills", "projects", "experience", "contact"].map((s) => <a key={s} href={`#${s}`}>{s}</a>)}
      </nav>
      <div className="ico">
        <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      </div>
      <motion.i className="bar" style={{ scaleX: bar }} />
    </motion.header>
  );
}
