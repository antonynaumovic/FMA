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
    Stage,
    AdaptiveDpr,
    Preload,
    AdaptiveEvents,
    PerformanceMonitor,
    BakeShadows
  } from "@react-three/drei";
  import * as THREE from "three";
  import { LayerMaterial, Color, Depth } from "lamina";
  import {
    SSAO,
    Bloom,
    SSR,
    DepthOfField,
    Noise,
    Vignette,
    ChromaticAberration,
    N8AO,
    TiltShift2,
  } from "@react-three/postprocessing";
  import { BlendFunction } from "postprocessing";
  import { Fira_Code as FontMono, Poppins as FontSans } from "next/font/google";
import TextLogo from "@/components/text";
import { Perf } from 'r3f-perf'
import { Canvas } from "@react-three/fiber";


export default function Background3D() {
    return(
    <Canvas
          camera={{ position: [0, 0, 20], fov: 10, far: 100 }}
          shadows
          gl={{ antialias: false }}
          aria-label="Background"
          performance={{ min: 0.5 }}
          className="w-full h-full"
        >
        
          {/* <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} /> */}
          <Effects />
          <AdaptiveEvents />
          <AdaptiveDpr pixelated />
          <SoftShadows size={50} focus={2} samples={2} />
          {/* <Perf position="top-left" /> */}

          <TextLogo />
          <Logo />

          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.5}
            penumbra={1}
            position={[10, 15, -5]}
          />
          <EnvironmentHDR />
          <directionalLight
            castShadow
            intensity={1}
            shadow-mapSize={200}
          ></directionalLight>

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.3, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial  opacity={0.4} />
          </mesh>
        </Canvas>
    )
}

function Effects() {
    return (
      <EffectComposer enableNormalPass={false} stencilBuffer={false} multisampling={3} autoClear={false}>
        <N8AO aoRadius={1} intensity={2} halfRes />
        {/* <Noise opacity={0.02} /> */}
        <Vignette eskil={false} offset={0.1} darkness={1} />
        <Bloom
          luminanceThreshold={1}
          luminanceSmoothing={1}
          
          intensity={0.5}
        />
        {/* <TiltShift2 blur={0.15} /> */}
      </EffectComposer>
    );
  }
  

function EnvironmentHDR() {
    return (
      <Environment
        files="/static/hdr.jpg"
        background
        blur={0.3}
        backgroundIntensity={0.2}
        resolution={256}
      >
        <Lightformer
          intensity={8}
          position={[10, 5, -15]}
          scale={[10, 5, 1]}
        />
      </Environment>
    );
  }