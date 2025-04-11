import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/C320MM-transformed.glb");

  // Update material color to black
  if (materials.wire_225143087) {
    materials.wire_225143087.color.set(0x292a2b); // Set color to black
  }

  return (
    <group
      scale={[5.2, 4, 2.8]}
      rotation={[Math.PI / 2, Math.PI, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        position={[-12, 1, -3]}
        geometry={nodes.Box072.geometry}
        material={materials.wire_225143087}
      />
      <mesh
        position={[-12, 1, -52]}
        geometry={nodes.Box072.geometry}
        material={materials.wire_225143087}
      />
    </group>
  );
}

useGLTF.preload("/C320MM-transformed.glb");
