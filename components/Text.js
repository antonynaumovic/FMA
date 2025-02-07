import { useRef, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
  Lightformer,
  Stage,
  ScreenSizer,
  PerformanceMonitor,
  MeshTransmissionMaterial,
  Edges,
  useTexture,
  Preload,
  Text3D,
  MeshReflectorMaterial,
} from "@react-three/drei";

export default function LogoText(props) {
  return (

    <group {...props} dispose={null}>
      <Center position={[0, 0.2, -10]}>
        <Text3D
          size={0.8}
          letterSpacing={-0.03}
          height={0.05}
          lineHeight={0.5}
          bevelEnabled
          bevelSize={0.005}
          position={[0, 0, 0]}
          font={"/static/Poppins_Bold.json"}
          
          
          bevelSegments={4}
          curveSegments={4}
        >
          {`   FUTURE\nMATERIAL\n  ARTISTS`}
          <MeshTransmissionMaterial
            samples={8}
            thickness={2}
            anisotropy={1}
            clearcoat={0.1}
            envMapIntensity={1}
            ior={1}
            roughness={.5}
            temporalDistortion={.5}
            chromaticAberration={.1}
            transmission={1}
            transparent
            transmissionSampler
            
          />
        </Text3D>
      </Center>
    </group>
  );
}
