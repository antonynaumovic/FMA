import { useRef, useState } from 'react';
import * as THREE from "three";
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
  Preload
} from "@react-three/drei";
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { easing } from "maath";

export default function Logo(props) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/static/FMA.glb");
  const colorMap = useTexture('/static/FMA_BaseColor.jpg')
  colorMap.flipY = false;
  colorMap.encoding = THREE.sRGBEncoding;
  const [dummy] = useState(() => new THREE.Object3D());
  const gradient  = .92;
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 1);
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt, 1);
  });


  return (
    <group {...props} dispose={null}>
    
      <Center>
        <mesh ref={mesh} geometry={nodes.FMA.geometry} {...props} castShadow receiveShadow>
        {/* <meshStandardMaterial {...props} envMapIntensity={4}/>
          <LayerMaterial toneMapped={true} envMapIntensity={4}>
          
        <Depth colorA="black" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="#0084ff" colorB="#f7b922" alpha={1} mode="add" near={3 * gradient} far={5} origin={[0, 1.5, -2.5]} />
        <Depth colorA="white" colorB="#f722e5" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[2, -2, -2]} />
        <Fresnel mode="add" color="white" intensity={0.2} power={1.5} bias={0.05} />
      </LayerMaterial> */}
      <meshStandardMaterial metalness={0.2} roughness={0.4} toneMapped={true} map={colorMap}/>
        </mesh>
      </Center>
      <Preload all />
    </group>
  );
}