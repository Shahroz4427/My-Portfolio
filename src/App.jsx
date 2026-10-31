import { useEffect } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Scene from "./components/Scene";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Skills, Projects, Experience, Contact } from "./components/Sections";
import { M } from "./store";

export default function App() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  useMotionValueEvent(scrollYProgress, "change", (v) => { M.s = v; });
  useEffect(() => {
    const move = (e) => { M.x = (e.clientX / innerWidth) * 2 - 1; M.y = -((e.clientY / innerHeight) * 2 - 1); };
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, []);
  return (
    <>
      <Scene />
      <Nav bar={bar} />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Contact />
      </main>
    </>
  );
}
