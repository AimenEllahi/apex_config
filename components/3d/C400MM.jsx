import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/C320MM-transformed.glb");

  // Update material color to black
  // Update material color to black
  if (materials.wire_225143087) {
    materials.wire_225143087.color.set(0x272829); // Set color to black

    materials.wire_225143087.metalness = 1; // Set metalness to 0.5
  }
  return (
    <group
      scale={[5.2, 4, 3.2 * 1.2]}
      rotation={[Math.PI / 2, Math.PI, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        position={[-12, 1, -9]}
        geometry={nodes.Box072.geometry}
        material={materials.wire_225143087}
      />
      <mesh
        position={[-12, 1, -46]}
        geometry={nodes.Box072.geometry}
        material={materials.wire_225143087}
      />
    </group>
  );
}

useGLTF.preload("/C320MM-transformed.glb");
