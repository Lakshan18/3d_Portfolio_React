import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DiamondBall from "./DiamondBall";

const BallCanvas = ({ logoUrl }) => (
  <Canvas
    gl={{ preserveDrawingBuffer: true }}
    camera={{ position: [0, 0, 5], fov: 50 }}
    style={{
      width: '100px',
      height: '100px',
      touchAction: 'none'
    }}
  >
    <ambientLight intensity={0.7} />
    <pointLight position={[5, 5, 5]} intensity={1.5} />
    <Suspense fallback={null}>
      <DiamondBall logoUrl={logoUrl} />
    </Suspense>
  </Canvas>
);

export default BallCanvas;