import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const AbstractShape = ({ isMobile, controlsRef }) => {
    const { scene } = useGLTF("./abstract_shape/scene.gltf");
    const objectRef = useRef();

    // Calculer et centrer l'objet dans la scène tout en conservant la position donnée
    useEffect(() => {
        if (objectRef.current) {
            // Stocker la position actuelle
            const currentPosition = objectRef.current.position.clone();

            // Calculer le centre du modèle
            const box = new THREE.Box3().setFromObject(objectRef.current);
            const center = box.getCenter(new THREE.Vector3());
            objectRef.current.position.sub(center); // Centrer l'objet autour de son centre de gravité

            // Appliquer la position donnée (celle définie dans les props)
            objectRef.current.position.add(currentPosition);

            // Si controlsRef est défini, centrez la caméra sur l'objet
            if (controlsRef.current) {
                controlsRef.current.target.copy(center);
                controlsRef.current.update(); // Mettre à jour les contrôles pour appliquer immédiatement la nouvelle cible
            }
        }
    }, [scene, controlsRef]);

    return (
        <mesh ref={objectRef}>
            <directionalLight
                // color="#f5d69d"
                position={[5, 10, 5]}
                intensity={8}
            />
            <spotLight
                position={[0, 5, 5]}
                angle={1}
                intensity={3}
                shadow-mapSize={1024}
            />

            <pointLight intensity={6} position={[1, -0.2, 0]} />

            {/* Ajouter l'objet à la scène */}
            <primitive
                object={scene}
                scale={isMobile ? 1.5 : 2}
                position={[0, 0, 0]} // Position spécifiée
                rotation={[0, 0, 0]}
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
                    maxPolarAngle={Math.PI}
                    minPolarAngle={0}
                />
                {/* Passez controlsRef à AbstractShape pour centrer la caméra sur l'objet */}
                <AbstractShape isMobile={isMobile} controlsRef={controlsRef} />
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={1}
                        luminanceSmoothing={0.9}
                        intensity={1.5}
                    />
                </EffectComposer>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AbstractShapeCanvas;
