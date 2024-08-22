import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-10, 20, 10]} // Rapproche la lumière pour un effet plus visible
                angle={0.3} // Augmente l'angle pour couvrir une plus grande surface
                penumbra={0.5} // Modifie le flou des ombres
                intensity={2} // Augmente l'intensité pour plus de luminosité
                castShadow // Active les ombres
                shadow-mapSize={1024}
            />
            <ambientLight intensity={0.7} />

            <pointLight intensity={1} />
            {/* Ajoute l'ordinateur à la scène */}
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    // Détermine si l'utilisateur est sur un appareil mobile
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        // Met à jour l'état isMobile en fonction de la correspondance du media query
        setIsMobile(mediaQuery.matches);
        // Fonction pour gérer le changement de media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        // Ajoute un écouteur d'événements pour le changement de media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        // Crée un canvas pour afficher l'ordinateur
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* Ajoute les contrôles de l'orbite */}
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
