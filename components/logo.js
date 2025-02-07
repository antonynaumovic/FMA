import { useRef, useState } from 'react';
import * as THREE from "three";
import { Canvas, invalidate, useFrame, useLoader } from "@react-three/fiber";
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
  Preload
} from "@react-three/drei";
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { easing } from "maath";


export default function Logo(props) {
  const mesh = useRef();
  const { nodes } = useGLTF("/static/FMA.glb");
  const colorMap = useTexture('/static/FMA_BaseColor.jpg')
  colorMap.flipY = false;
  const [dummy] = useState(() => new THREE.Object3D());
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, .5);
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
  });


  return (
    <group {...props} dispose={null}>
    

        <mesh ref={mesh} geometry={nodes.FMA.geometry} {...props} castShadow >
          <meshStandardMaterial metalness={0.2} roughness={0.4} toneMapped={false} map={colorMap}/>
        </mesh>
    </group>
  );
}