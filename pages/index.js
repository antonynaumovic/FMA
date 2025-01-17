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
  SoftShadows
} from "@react-three/drei";
import * as THREE from "three";
import { LayerMaterial, Color, Depth } from "lamina";
import { SSAO, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function Effects() {
  return (
    <EffectComposer>
      <SSAO
        blendFunction={BlendFunction.MULTIPLY} // Use NORMAL to see the effect
        samples={31}
        radius={5}
        intensity={30}
      />
      <Bloom mipmapBlur luminanceThreshold={1} />
    </EffectComposer>
  );
}

export default function IndexPage() {
  const [perfSucks, degrade] = useState(false);
  return (
    <LandingLayout>
      {/* <Canvas
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        //eventSource={document.getElementById('root')}
        eventPrefix="client"
        camera={{ position: [0, 0, 15], fov: 10 }}>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <color attach="background" args={['#f0f0f0']} />
        <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
          <Scene />
          <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="blue" scale={20} position={[0, -1, 0]}>
            <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
          </AccumulativeShadows>
        </group>
        <Env perfSucks={perfSucks} />
      </Canvas> 
      */}
      <Canvas
        camera={{ position: [0, 0, 20], fov: 10 }}
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        eventPrefix="client"
        
      >
      <SoftShadows size={50} focus={2} samples={10}/>
        <Effects />
        <Logo />
        <ambientLight intensity={0.7}/>
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} />
      <Environment preset="dawn" background blur={.3} backgroundIntensity={0.1}/>
      <directionalLight castShadow intensity={1} shadow-mapSize={1024}></directionalLight>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </Canvas>
    </LandingLayout>

    //     <LandingLayout>
    //       <Canvas gl={{ antialias: false, preserveDrawingBuffer: true }} shadows camera={{ position: [4, 0, 6], fov: 35 }} frameloop="demand">
    //         <group position={[0, -0.75, 0]}>
    //         <Stage shadows="accumulative" >
    //         <ScreenSizer
    //   scale={10} // scale factor
    // >
    //             <Model/>
    //             </ScreenSizer>
    //         </Stage>

    //         </group>
    //         {/* {realism && <Effects importanceSampling={importanceSampling} />} */}
    //         {/* <Environment preset="dawn" background blur={1} backgroundIntensity={.7}>
    //             <Lightformer
    //             form="rect" // circle | ring | rect (optional, default = rect)
    //             intensity={1} // power level (optional = 1)
    //             color="white" // (optional = white)
    //             scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
    //             target={[0, 0, 0]} // Target position (optional = undefined)
    //           />
    //         </Environment> */}
    //       </Canvas>
    //     </LandingLayout>
  );
}
