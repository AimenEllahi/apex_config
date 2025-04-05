"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import Model from "./Model";

export default function ModelViewer() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400">
      <Canvas shadows>
        <ambientLight intensity={5.5} />
        <Environment preset="warehouse" />
        <OrbitControls
          zoomSpeed={0.5}
          maxZoom={1}
          minZoom={0.5}
          maxPolarAngle={Math.PI / 2}
        />
        {/* Stage wraps the model and sets up lighting and contact shadows */}
        <Stage adjustCamera={1}>
          <Model />
        </Stage>
      </Canvas>
    </div>
  );
}
