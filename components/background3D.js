import { EffectComposer } from "@react-three/postprocessing";
import {
  Environment,
  Lightformer,
  SoftShadows,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { Bloom, Vignette, N8AO } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

import Logo from "@/components/logo";
import TextLogo from "@/components/Text";

export default function Background3D() {
  return (
    <Canvas
      shadows
      aria-label="Background"
      camera={{ position: [0, 0, 20], fov: 10, far: 100 }}
      className="w-full h-full"
      gl={{ antialias: false }}
      performance={{ min: 0.5 }}
    >
      {/* <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} /> */}
      <Effects />
      <AdaptiveEvents />
      <AdaptiveDpr pixelated />
      <SoftShadows focus={2} samples={2} size={50} />
      {/* <Perf position="top-left" /> */}

      <TextLogo />
      <Logo />

      <ambientLight intensity={0.7} />
      <spotLight
        angle={0.5}
        intensity={0.5}
        penumbra={1}
        position={[10, 15, -5]}
      />
      <EnvironmentHDR />
      <directionalLight castShadow intensity={1} shadow-mapSize={200} />

      <mesh
        receiveShadow
        position={[0, -1.3, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
    </Canvas>
  );
}

function Effects() {
  return (
    <EffectComposer
      autoClear={false}
      enableNormalPass={false}
      multisampling={3}
      stencilBuffer={false}
    >
      <N8AO halfRes aoRadius={1} intensity={2} />
      {/* <Noise opacity={0.02} /> */}
      <Vignette darkness={1} eskil={false} offset={0.1} />
      <Bloom intensity={0.5} luminanceSmoothing={1} luminanceThreshold={1} />
      {/* <TiltShift2 blur={0.15} /> */}
    </EffectComposer>
  );
}

function EnvironmentHDR() {
  return (
    <Environment
      background
      backgroundIntensity={0.2}
      blur={0.3}
      files="/static/hdr.jpg"
      resolution={256}
    >
      <Lightformer intensity={8} position={[10, 5, -15]} scale={[10, 5, 1]} />
    </Environment>
  );
}
