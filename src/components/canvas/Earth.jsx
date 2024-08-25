import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
    const earth = useGLTF("./abstract_model/scene.gltf"); // Charge le modèle de la Terre

    return (
        <mesh>
        {/* // Crée le modèle de la Terre */}

            <directionalLight
                color="#011347"
                position={[5, 10, 5]}
                intensity={4}
                castShadow
            />
            <spotLight
                position={[0, 5, 5]}
                angle={1}
                intensity={3}
                shadow-mapSize={1024}
            />
            <pointLight intensity={6} position={[1, -0.2, 0]} />
        
        {/* Ajoute l'objet à la scène */}
        <primitive
            object={earth.scene}
            scale={1.8}
        />

        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        // Crée un canvas pour la Terre
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 100,
                position: [5, 2, 7],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
