import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { skillsList3D } from '../../data/portfolioData';

function Word({ children, position }) {
  const fontProps = { fontSize: 0.35, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Text
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={position}
        color={hovered ? '#00f0ff' : '#cbd5e1'}
      >
        {children}
      </Text>
    </Float>
  );
}

function Cloud({ radius = 3.2 }) {
  const words = useMemo(() => {
    const temp = [];
    const sphereRadius = radius;
    const skills = skillsList3D;
    const len = skills.length;
    for (let i = 0; i < len; i++) {
      const phi = Math.acos(-1 + (2 * i) / len);
      const theta = Math.sqrt(len * Math.PI) * phi;
      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);
      temp.push({ word: skills[i], pos: [x, y, z] });
    }
    return temp;
  }, [radius]);

  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(({ word, pos }, index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </group>
  );
}

export default function SkillSphere3D() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
    }
  }, []);

  return (
    <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] relative flex items-center justify-center pointer-events-auto touch-pan-y">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <Cloud radius={2.8} />
        <OrbitControls
          enableZoom={false}
          enableRotate={!isTouchDevice}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
