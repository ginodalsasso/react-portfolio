import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import CanvasLoader from "../Loader";

const AbstractShape = ({ isMobile, controlsRef }) => {
    const { scene } = useGLTF("./paradox_abstract/scene.gltf");
    const objectRef = useRef();

    return (
        <mesh ref={objectRef}>
            <directionalLight
                // color="#f5d69d"
                position={[8, 10, 5]}
                intensity={8}
            />
            <pointLight intensity={3} position={[1, 1, 0]} />
            
            {/* Ajouter l'objet à la scène */}
            <primitive
                object={scene}
                scale={isMobile ? 1.1 : 2.3}
                position={[0, -1, 0]} // Position spécifiée
                // rotation={[0, 0, 0]}
            />
        </mesh>
    );
};

const AbstractShapeCanvas = () => {
    // Déclare un état `isMobile` pour déterminer si l'utilisateur est sur un appareil mobile
    const [isMobile, setIsMobile] = useState(false);

    // Référence pour les contrôles de la caméra (par exemple, OrbitControls)
    const controlsRef = useRef();

    // Utilise `useEffect` pour détecter si l'utilisateur est sur un appareil mobile
    useEffect(() => {
        // Cela vérifie si la largeur de l'écran est de 500px ou moins
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Définit l'état `isMobile` en fonction de la correspondance actuelle du media query
        setIsMobile(mediaQuery.matches);

        // Définit une fonction pour mettre à jour `isMobile` chaque fois que le media query change
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Nettoie l'écouteur d'événements lorsque le composant est démonté
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []); // Le tableau de dépendances vide [] signifie que cet effet s'exécutera uniquement lors du premier montage du composant

    useEffect(() => {
        // Vérifie si la référence des contrôles (controlsRef) est définie
        if (controlsRef.current) {
            // Cela centre la vue de la caméra sur le centre de l'objet dans la scène 3D
            controlsRef.current.target.set(0, 0, 0);

            // Met à jour les contrôles pour appliquer immédiatement la nouvelle cible
            controlsRef.current.update();
        }
    }, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois après le premier rendu du composant

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    ref={controlsRef}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2} 
                />
                {/* Passez controlsRef à AbstractShape pour centrer la caméra sur l'objet */}
                <AbstractShape isMobile={isMobile} controlsRef={controlsRef} />
                <EffectComposer>
                    <Bloom />
                </EffectComposer>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AbstractShapeCanvas;
