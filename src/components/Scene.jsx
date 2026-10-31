import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { MathUtils, Color } from "three";
import { M } from "../store";

const lerp = MathUtils.lerp;

function Core() {
  const g = useRef();
  useFrame((s, dt) => {
    const wide = s.viewport.width > 9 ? 2.7 : 0;
    const tx = wide * (1 - Math.min(M.s * 7, 2)) + M.x * 0.5;
    const sc = lerp(g.current.scale.x, Math.max(1 - M.s * 2.2, 0.5), 0.05);
    g.current.position.x = lerp(g.current.position.x, tx, 0.05);
    g.current.position.y = lerp(g.current.position.y, M.y * 0.4 - M.s * 2.5, 0.05);
    g.current.rotation.y += dt * 0.3;
    g.current.rotation.x = lerp(g.current.rotation.x, -M.y * 0.5 + M.s * 4, 0.04);
    g.current.scale.setScalar(sc);
  });
  return (
    <group ref={g}>
      <Float speed={2} floatIntensity={1.2} rotationIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.45, 12]} />
          <MeshDistortMaterial color="#6D28D9" emissive="#3B0F8F" emissiveIntensity={0.7} roughness={0.2} metalness={0.5} distort={0.45} speed={2.2} />
        </mesh>
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshBasicMaterial wireframe color="#22D3EE" transparent opacity={0.22} />
        </mesh>
      </Float>
      <Ring r={2.3} tilt={[1.1, 0.2, 0]} speed={0.5} color="#22D3EE" />
      <Ring r={2.9} tilt={[0.4, 0.9, 0.3]} speed={-0.35} color="#F472B6" />
      <Ring r={3.5} tilt={[1.4, -0.5, 0.8]} speed={0.22} color="#A78BFA" />
    </group>
  );
}

function Ring({ r, tilt, speed, color }) {
  const g = useRef();
  useFrame((_, dt) => { g.current.rotation.z += dt * speed; });
  return (
    <group rotation={tilt}>
      <group ref={g}>
        <mesh><torusGeometry args={[r, 0.006, 8, 160]} /><meshBasicMaterial color={color} transparent opacity={0.55} /></mesh>
        <mesh position={[r, 0, 0]}><sphereGeometry args={[0.07, 16, 16]} /><meshBasicMaterial color={color} /></mesh>
      </group>
    </group>
  );
}

function Particles({ count = 2600 }) {
  const ref = useRef();
  const { pos, col } = useMemo(() => {
    const pos = new Float32Array(count * 3), col = new Float32Array(count * 3);
    const a = new Color("#8B5CF6"), b = new Color("#22D3EE"), c = new Color("#F472B6");
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 9, t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1);
      pos.set([r * Math.sin(p) * Math.cos(t), r * Math.sin(p) * Math.sin(t) * 0.7, r * Math.cos(p)], i * 3);
      const k = Math.random(); (k < 0.4 ? a : k < 0.75 ? b : c).toArray(col, i * 3);
    }
    return { pos, col };
  }, [count]);
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.03;
    ref.current.rotation.x = lerp(ref.current.rotation.x, M.y * 0.1 + M.s * 1.5, 0.03);
    ref.current.position.z = lerp(ref.current.position.z, M.s * 6, 0.04);
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
        <bufferAttribute attach="attributes-color" args={[col, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors sizeAttenuation transparent opacity={0.85} depthWrite={false} />
    </points>
  );
}

export default function Scene() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} dpr={[1, 1.75]} frameloop={reduce ? "demand" : "always"}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={60} color="#A78BFA" />
        <pointLight position={[-6, -3, 3]} intensity={50} color="#22D3EE" />
        <Core />
        <Particles />
      </Canvas>
    </div>
  );
}
