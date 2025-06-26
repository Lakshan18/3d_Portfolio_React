import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const DiamondBall = ({ logoUrl }) => {
  const meshRef = useRef();
  const { nodes } = useGLTF('/models/diamond_ball/scene.gltf');
  const [texture, setTexture] = useState(null);
  const [decalScale, setDecalScale] = useState([1, 1, 1]);

  // Proper texture loading with cleanup
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const loadedTexture = loader.load(logoUrl, (tex) => {
      // Calculate aspect-appropriate scale
      const img = new Image();
      img.src = logoUrl;
      img.onload = () => {
        const aspect = img.width / img.height;
        const baseScale = 0.9;
        setDecalScale(
          aspect > 1 
            ? [baseScale, baseScale / aspect, baseScale]
            : [baseScale * aspect, baseScale, baseScale]
        );
        setTexture(tex);
      };
    });

    return () => {
      loadedTexture.dispose(); // Cleanup texture
    };
  }, [logoUrl]);

  // Gentle individual rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const meshNode = Object.values(nodes).find(node => node.isMesh);
  if (!meshNode || !texture) return null;

  return (
    <mesh
      ref={meshRef}
      geometry={meshNode.geometry}
      scale={[1.8, 1.8, 1.8]}
    >
      <meshStandardMaterial 
        color="#E2D0F2" 
        transparent 
        opacity={0.9} 
      />
      <Decal
        position={[0, 0, 1.3]}
        rotation={[0, 0, 0]}
        scale={decalScale}
      >
        <meshStandardMaterial
          map={texture}
          transparent
          polygonOffset
          polygonOffsetFactor={-5}
        />
      </Decal>
    </mesh>
  );
};

export default DiamondBall;