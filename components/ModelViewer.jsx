"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import Model from "./3d/Model";

//41ad20959213219038a11b4fe20996d2
// <script type="text/javascript" src="https://form.jotform.com/jsform/243606952548061"></script>
export default function ModelViewer() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400">
      <Canvas shadows>
        <ambientLight intensity={1.2} />
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
