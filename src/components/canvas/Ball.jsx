import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        // Crée une sphère flottante
        <Float speed={0.5} rotationIntensity={0.5} floatIntensity={2}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={3}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color={"#c4c4c4"}
                    polygonOffset 
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 0.5]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop="demand" // Optimise les performances
            gl={{ preserveDrawingBuffer: true }} // Préserve le tampon de dessin
        >
            {/* Ajoute les contrôles de l'orbite */}
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
