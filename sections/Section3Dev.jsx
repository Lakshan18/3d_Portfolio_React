import React from "react";
import { styles } from "../styles";

const Section3Dev = () => {
    const logos = [
        { id: 1, url: "/dev_logo/react_ic.png" },
        { id: 2, url: "/dev_logo/angular_ic.png" },
        { id: 3, url: "/dev_logo/nodejs_ic.png" },
        { id: 4, url: "/dev_logo/nextjs_ic.png" },
        { id: 5, url: "/dev_logo/framer_ic.png" },
        { id: 6, url: "/dev_logo/html_ic.png" },
        { id: 7, url: "/dev_logo/css_ic.png" },
        { id: 8, url: "/dev_logo/threejs_ic.png" },
        { id: 9, url: "/dev_logo/javascript_ic.png" },
        { id: 10, url: "/dev_logo/laravel_ic.png" },
        { id: 11, url: "/dev_logo/firebase_ic.png" },
        { id: 12, url: "/dev_logo/bootstrap_ic.png" },
        { id: 13, url: "/dev_logo/flutter_ic.png" },
        { id: 14, url: "/dev_logo/tailwind_ic.png" },
        { id: 15, url: "/dev_logo/figma_ic.png" },
        { id: 16, url: "/dev_logo/php_ic.png" },
        { id: 17, url: "/dev_logo/mysql_ic.png" },
        { id: 18, url: "/dev_logo/mongodb_ic.png" },
    ];

    return (
        <div className={`${styles.customGradientHorizontal} w-full min-h-screen px-[3%]`}>
            <div className="flex flex-col justify-start">
                <span className={styles.subTopicText}>my stack</span>
                <span className={styles.mainTitleText}>Toolkit.</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-8">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="bg-[#37254E] rounded-full w-[100px] h-[100px] flex items-center justify-center"
                            style={{
                                touchAction: "none",
                                perspective: "600px",
                            }}
                        >
                            <img
                                src={logo.url}
                                className="w-[60%] h-[60%] object-cover"
                                alt=""
                                style={{
                                    backfaceVisibility: "hidden",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section3Dev;


// import { useRef, useState, useEffect, Suspense } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { Decal, useGLTF, OrbitControls } from "@react-three/drei";
// import { TextureLoader } from "three";
// import { useDrag } from "@use-gesture/react";
// import { styles } from "../styles";
// import * as THREE from "three";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const Ball = ({ logoUrl }) => {
//     const meshRef = useRef();
//     const { nodes } = useGLTF('/models/diamond_ball/scene.gltf');
//     const logoTexture = useLoader(TextureLoader, logoUrl);

//     const [decalScale, setDecalScale] = useState([0.7, 0.7, 0.7]);
//     useEffect(() => {
//         const img = new window.Image();
//         img.src = logoUrl;
//         img.onload = () => {
//             let scale = 1.1;
//             if (img.width > img.height) {
//                 setDecalScale([scale, scale * (img.height / img.width), scale]);
//             } else {
//                 setDecalScale([scale * (img.width / img.height), scale, scale]);
//             }
//         };
//     }, [logoUrl]);

//     const swingRef = useRef({ t: Math.random() * Math.PI * 2 });

//     const [rotationY, setRotationY] = useState(0);

//     useDrag(
//         ({ movement: [mx], dragging }) => {
//             let newRot = THREE.MathUtils.clamp(mx / 100, -Math.PI / 2, Math.PI / 2);
//             setRotationY(newRot);
//         },
//         { target: meshRef, eventOptions: { passive: false } }
//     );

//     useFrame((state, delta) => {
//         if (meshRef.current) {
//             if (Math.abs(rotationY) < 0.01) {
//                 swingRef.current.t += delta * 1.2;
//                 meshRef.current.rotation.y = Math.sin(swingRef.current.t) * 0.25;
//             } else {
//                 meshRef.current.rotation.y = rotationY;
//             }
//         }
//     });

//     const meshNode = Object.values(nodes).find(node => node.isMesh);
//     if (!meshNode) return null;

//     return (
//         <mesh
//             ref={meshRef}
//             geometry={meshNode.geometry}
//             scale={[1.8, 1.8, 1.8]}
//             position={[0, 0, 0]}
//             castShadow
//             receiveShadow
//             style={{ touchAction: "none" }}
//         >
//             <meshStandardMaterial color="#E2D0F2" transparent opacity={0.9} />
//             <Decal
//                 position={[0, 0, 1.3]}
//                 rotation={[0, 0, 0]}
//                 scale={decalScale}
//                 map={logoTexture}
//                 polygonOffset
//                 polygonOffsetFactor={-5}
//             />
//         </mesh>
//     );
// };

// const BallCanvas = ({ logoUrl }) => (
//     <Canvas
//         camera={{ position: [0, 0, 5], fov: 50 }}
//         style={{ width: 100, height: 100, touchAction: "none" }}
//     >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[0, 0, 5]} />
//         <Suspense fallback={null}>
//             <Ball logoUrl={logoUrl} />
//         </Suspense>
//         <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//     </Canvas>
// );

// const Section3Dev = () => {
//     const logos = [
//         { id: 1, url: "/dev_logo/react_ic.png" },
//         { id: 2, url: "/dev_logo/angular_ic.png" },
//         { id: 3, url: "/dev_logo/nodejs_ic.png" },
//         { id: 4, url: "/dev_logo/nextjs_ic.png" },
//         { id: 5, url: "/dev_logo/framer_ic.png" },
//         { id: 6, url: "/dev_logo/html_ic.png" },
//         { id: 7, url: "/dev_logo/css_ic.png" },
//         { id: 8, url: "/dev_logo/threejs_ic.png" },
//         { id: 9, url: "/dev_logo/javascript_ic.png" },
//         { id: 10, url: "/dev_logo/flutter_ic.png" },
//         { id: 11, url: "/dev_logo/laravel_ic.png" },
//         { id: 12, url: "/dev_logo/bootstrap_ic.png" },
//         { id: 13, url: "/dev_logo/php_ic.png" },
//         { id: 14, url: "/dev_logo/tailwind_ic.png" },
//         { id: 15, url: "/dev_logo/figma_ic.png" },
//         { id: 16, url: "/dev_logo/mysql_ic.png" },
//         { id: 17, url: "/dev_logo/mongodb_ic.png" },
//         { id: 18, url: "/dev_logo/csharp_ic.png" },
//     ];

//     return (
//         <div className={`${styles.customGradientHorizontal} w-full min-h-screen px-[3%]`}>
//             <div className="flex flex-col justify-start">
//                 <span className={styles.subTopicText}>my stack</span>
//                 <span className={styles.mainTitleText}>Toolkit.</span>
//             </div>
//             <div className="flex flex-col items-center">
//                 <div className="flex flex-wrap justify-center gap-8">
//                     {logos.map((logo) => (
//                         <div
//                             key={logo.id}
//                             className="bg-[#37254E] rounded-full w-[100px] h-[100px] flex items-center justify-center"
//                             style={{ touchAction: "none" }}
//                         >
//                             <BallCanvas logoUrl={logo.url} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Section3Dev;