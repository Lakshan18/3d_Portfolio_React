import { Suspense } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from './Loader';

const Computers = () => {
    const computer = useGLTF('/models/desktop_pc/scene.gltf');

    return (
        <>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} position={[0, 1, 0]} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={0.75}
                position={[0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </>
    );
};

const ComputerCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 20 }}
            gl={{
                preserveDrawingBuffer: true,
                powerPreference: "high-performance",
                antialias: false
            }}
            onCreated={({ gl }) => {
                gl.getContext().canvas.addEventListener('webglcontextlost', (event) => {
                    console.warn('Context Lost', event);
                });
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;