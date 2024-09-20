import React, { Suspense, useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const AbstractShape = React.memo(({ isMobile, controlsRef }) => {
    const { scene } = useGLTF("./paradox_abstract/scene.gltf");
    const objectRef = useRef();

    const scaleValue = useMemo(() => isMobile ? 1.3 : 2.8, [isMobile]);
    const positionValue = useMemo(() => isMobile ? [0, -1, 0] : [0, 0, 0], [isMobile]);

    return (
        <mesh ref={objectRef}>
            <directionalLight
                position={[1, 10, 5]}
                intensity={isMobile ? 10 : 12}
            />

            {/* Ajouter l'objet à la scène */}
            <primitive
                object={scene}
                scale={scaleValue}
                position={positionValue}
            />
        </mesh>
    );
});

const AbstractShapeCanvas = () => {
    // Déclare un état `isMobile` pour déterminer si l'utilisateur est sur un appareil mobile
    const [isMobile, setIsMobile] = useState(false);

    // Référence pour les contrôles de la caméra (par exemple, OrbitControls)
    const controlsRef = useRef();

    // Utilise `useEffect` pour détecter si l'utilisateur est sur un appareil mobile
    const handleMediaQueryChange = useCallback((event) => {
        setIsMobile(event.matches);
    }, []);

    useEffect(() => {
        // Cela vérifie si la largeur de l'écran est de 500px ou moins
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Définit l'état `isMobile` en fonction de la correspondance actuelle du media query
        setIsMobile(mediaQuery.matches);

        // Définit une fonction pour mettre à jour `isMobile` chaque fois que le media query change
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Nettoie l'écouteur d'événements lorsque le composant est démonté
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, [handleMediaQueryChange]); // Le tableau de dépendances contient handleMediaQueryChange

    useEffect(() => {
        // Vérifie si la référence des contrôles (controlsRef) est définie
        if (controlsRef.current) {
            // Cela centre la vue de la caméra sur le centre de l'objet dans la scène 3D
            controlsRef.current.target.set(0, 0, 0);

            // Met à jour les contrôles pour appliquer immédiatement la nouvelle cible
            controlsRef.current.update();
        }
    }, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois après le premier rendu du composant

    // Utilise `useMemo` pour mémoriser les contrôles de l'orbite
    const memoizedOrbitControls = useMemo(() => (
        <OrbitControls
            autoRotate
            ref={controlsRef}
            enableZoom={false}
        />
    ), []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, isMobile ? 1.5 : 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {memoizedOrbitControls}
                {/* Passez controlsRef à AbstractShape pour centrer la caméra sur l'objet */}
                <AbstractShape isMobile={isMobile} controlsRef={controlsRef} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AbstractShapeCanvas;