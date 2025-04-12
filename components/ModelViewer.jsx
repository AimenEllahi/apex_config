"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import Model from "./3d/Model";

export default function ModelViewer() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400">
      <Canvas shadows>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, 0, 5]} intensity={1} castShadow />
        <OrbitControls
          zoomSpeed={0.5}
          maxZoom={1}
          minZoom={0.5}
          maxPolarAngle={Math.PI / 2}
        />

        <Stage environment={"studio"} adjustCamera={false}>
          <Model />
        </Stage>
      </Canvas>
    </div>
  );
}
