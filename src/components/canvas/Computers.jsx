import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from 'three'; 

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const { scene } = useGLTF("./abstract_shape/scene.gltf");
    const objectRef = useRef();

    // Ajuster les propriétés des matériaux
    // Object.values(materials).forEach((material) => {
    //     material.metalness = 1;
    //     // material.emissive = new THREE.Color("#000000");
    //     // material.emissiveIntensity = 0.05;
    // });

    // Calculer le centre du modèle
    useEffect(() => {
        if (objectRef.current) {
            const box = new THREE.Box3().setFromObject(objectRef.current);
            const center = box.getCenter(new THREE.Vector3());
            objectRef.current.position.sub(center); // Centrer l'objet autour de son centre de gravité
        }
    }, [scene]);

    return (
        <mesh ref={objectRef}>
            {/* Ajoute les lumières à la scène */}
            {/* <hemisphereLight intensity={0.4} groundColor="black" /> */}
            <directionalLight
                // color="#f5d69d"
                position={[5, 10, 5]}
                intensity={8}
                // castShadow
            />
            <spotLight
                position={[0, 5, 5]}
                angle={1}
                intensity={3}
                shadow-mapSize={1024}
            />
            {/* <ambientLight intensity={0.4} /> */}

            <pointLight intensity={6} position={[1, -0.2, 0]} />

            {/* Ajouter l'objet à la scène */}
            <primitive
                object={scene}
                scale={isMobile ? 1.5 : 2}
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const controlsRef = useRef();

    // Vérifie si l'utilisateur est sur mobile
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches); 
        // Met à jour l'état en fonction de la correspondance du media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.target.set(0, 0, 0); // Centre la caméra sur le centre de l'objet
            controlsRef.current.update(); // Mettre à jour les contrôles
        }
    }, []);

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
                <Computers isMobile={isMobile} />
                <EffectComposer>
                    <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} intensity={1.5} />
                </EffectComposer>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
