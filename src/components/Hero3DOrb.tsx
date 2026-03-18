'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function RotatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Auto rotate
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;

    // Mouse tilt tracking
    const targetX = (state.pointer.x * viewport.width) / 20;
    const targetY = (state.pointer.y * viewport.height) / 20;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.35, 128, 32]}>
      <meshPhysicalMaterial 
        color="#8B5CF6"
        metalness={0.5}
        roughness={0.2}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        envMapIntensity={1}
      />
    </TorusKnot>
  );
}

export default function Hero3DOrb() {
  return (
    <div className="w-[300px] h-[300px] mx-auto cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[0, 5, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={3} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#3B82F6" />
        <RotatingOrb />
      </Canvas>
    </div>
  );
}
