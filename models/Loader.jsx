import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        color: "#fff",
      }}
    >
      <span style={{ fontSize: 24, marginBottom: 20 }}>
        {progress.toFixed(2)}%
      </span>
      <div
        style={{
          width: "200px",
          height: "4px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#6f3fc7",
            width: `${progress}%`,
            transition: "width 0.1s ease-out",
          }}
        />
      </div>
      <p style={{ fontSize: 14, marginTop: 20 }}>
        Loading 3D model...
      </p>
    </Html>
  );
};

export default Loader;