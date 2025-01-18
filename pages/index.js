"use client";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import LandingLayout from "../layouts/landing";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  EffectComposer,
  HueSaturation,
  BrightnessContrast,
} from "@react-three/postprocessing";
import Logo from "@/components/logo";
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
  ContactShadows,
  SoftShadows,
  Text3D,
  AsciiRenderer,
  MeshWobbleMaterial,
  CubeCamera,
  MeshRefractionMaterial,
  useTexture,
  Stage
} from "@react-three/drei";
import * as THREE from "three";
import { LayerMaterial, Color, Depth, } from "lamina";
import { SSAO, Bloom, SSR, DepthOfField, Noise, Vignette, ChromaticAberration, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Fira_Code as FontMono, Poppins as FontSans } from "next/font/google";
import TextLogo from "@/components/Text"

function Effects() {
  return (
    <EffectComposer>
      <N8AO aoRadius={1} intensity={2} />
      {/* <SSR />  */}
      <Noise opacity={0.02} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
      <Bloom luminanceThreshold={1} luminanceSmoothing={1} mipmapBlur={true} intensity={0.5}/>
      <ChromaticAberration offset={[0.00005, 0.00005]}/>
      <TiltShift2 blur={0.15} />
    </EffectComposer>
  );
}

function EnvironmentHDR() {
  return(
    <Environment files='/static/hdr.jpg' background blur={.3} backgroundIntensity={0.2}> 
      <Lightformer intensity={8} position={[10, 5, -15]} scale={[10, 5, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> 
    </Environment>
  );
}

export default function IndexPage() {
  const [perfSucks, degrade] = useState(false);
  return (
    <LandingLayout>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 10 }}
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        eventPrefix="client"
      >
      <SoftShadows size={50} focus={2} samples={10}/>
        <Effects />
        
        <TextLogo />
        <Logo />
        
        <ambientLight intensity={0.7}/>
      <spotLight intensity={0.5} angle={0.5} penumbra={1} position={[10, 15, -5]} />
      <EnvironmentHDR />
      <directionalLight castShadow intensity={1} shadow-mapSize={1024}></directionalLight>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </Canvas>
    </LandingLayout>
  );
}
