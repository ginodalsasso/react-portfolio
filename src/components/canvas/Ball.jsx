import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture, Decal } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cube = ({ imgUrl }) => {
    const texture = useTexture(imgUrl); // Charge la texture de l'image
    const scale = [0.8, 0.8, 0.8]; // Définit l'échelle des décalcomanies

    return (
        <mesh castShadow receiveShadow scale={[3, 3, 3]}>
            <boxGeometry args={[1, 1, 1]} /> {/* // Ajoute une géométrie de cube */}
            <meshStandardMaterial color="#ffffff" /> {/* // Ajoute une couleur */}
            
            {/* // Ajoute des décalcomanies sur chaque faces du cube */}
            <Decal position={[0, 0, 0.5]} rotation={[0, 0, 0]} scale={scale} map={texture} /> 
            <Decal position={[0, 0, -0.5]} rotation={[Math.PI, 0, 0]} scale={scale} map={texture} />
            <Decal position={[0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={scale} map={texture} />
            <Decal position={[-0.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={scale} map={texture} />
            <Decal position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={scale} map={texture} />
            <Decal position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]} scale={scale} map={texture} />
        </mesh>
    );
};

const CubeCanvas = ({ icon }) => {
    return (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} enableDamping={true} /> {/* Active l'amortissement pour les contrôles d'orbite */}
                <ambientLight intensity={0.8} /> {/* Ajuste l'intensité de la lumière ambiante */}
                <directionalLight position={[0, 1, 0.5]} intensity={0.8} /> 
                <Cube imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default CubeCanvas;
