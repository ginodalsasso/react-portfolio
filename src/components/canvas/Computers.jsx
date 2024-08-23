import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { Bloom, SSAO, DepthOfField } from "@react-three/postprocessing";


import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./commodore_64/scene.gltf");

    return (
        <mesh>
            {/* Ajoute les lumières à la scène */}
            <hemisphereLight intensity={0.4} groundColor="black" />
            <directionalLight // Ajoute une lumière directionnelle
                color="#f5d69d"
                position={[5, 10, 5]}
                intensity={0.8}
                castShadow
            />
            <spotLight // Ajoute une lumière ponctuelle
                position={[0, 5, 5]} 
                angle={0.8} // Angle plus large
                penumbra={1} // 
                intensity={100} // Intensité élevée pour un éclairage fort
                castShadow
                shadow-mapSize={1024}
            />
            {/* <ambientLight intensity={0.4} /> */}

            <pointLight 
                intensity={6} 
                position={[1, -0.2, 0]}
            />

            {/* Ajoute l'ordinateur à la scène */}
            <primitive
                object={computer.scene} // Utilise le modèle 3D de l'ordinateur
                scale={isMobile ? 0.6 : 0.8} // Ajuste la taille de l'ordinateur
                position={isMobile ? [0, -1, -2.2] : [0, -2.5, -1.5]} // Positionne l'ordinateur
                rotation={[0, 0, 0]} // Ajuste la rotation de l'ordinateur
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
            frameloop="demand" // Optimise les performances
            shadows // Active les ombres
            dpr={[1, 2]} // Ajuste le taux de rafraîchissement
            camera={{ position: [20, 3, 5], fov: 25 }} // Positionne la caméra
            gl={{ preserveDrawingBuffer: true }} // Préserve le tampon de dessin
        >
            {/* Ajoute les contrôles de l'orbite */}
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2.4}
                    // pour la rotation verticale et horizontale
                    // maxPolarAngle={Math.PI}
                    // minPolarAngle={0} 
                    
                />
                <Computers isMobile={isMobile} />

            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
