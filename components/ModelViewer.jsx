"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Box,
} from "@react-three/drei";

export default function ModelViewer() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />
        <Environment preset="warehouse" />

        {/* Placeholder 3D model - will be replaced with actual model later */}
        <group position={[0, 0, 0]}>
          <Box args={[2, 1, 3]} position={[0, 0.5, 0]}>
            <meshStandardMaterial color="#ffffff" />
          </Box>
          {/* Tracks */}
          <Box args={[2.2, 0.4, 3.2]} position={[0, -0.3, 0]}>
            <meshStandardMaterial color="#333333" />
          </Box>
          {/* Cabin */}
          <Box args={[1.5, 0.8, 1.2]} position={[0, 1.2, -0.5]}>
            <meshStandardMaterial color="#ffffff" />
          </Box>
          {/* Arm */}
          <Box args={[0.3, 0.3, 1.5]} position={[0, 0.8, 1.2]}>
            <meshStandardMaterial color="#ff5500" />
          </Box>
          {/* Bucket */}
          <Box args={[1.5, 0.6, 0.8]} position={[0, 0.5, 2.2]}>
            <meshStandardMaterial color="#333333" />
          </Box>
        </group>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
}
