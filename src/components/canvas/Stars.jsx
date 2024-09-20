import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Crée un composant pour les étoiles
const Stars = (props) => {
    // déclare une variable de référence pour les étoiles
    const ref = useRef();

    const [sphere] = useState(() => {
    // Vérifie si l'utilisateur est sur un appareil mobile (par exemple, si la largeur de l'écran est inférieure à 768px)
    const isMobile = window.innerWidth < 768;
    
    // Détermine le nombre de points en fonction de l'appareil
    const pointCount = isMobile ? 1500 : 3000;
    // La fonction random.inSphere génère un ensemble de points aléatoires positionnés à l'intérieur d'une sphère
    // new Float32Array(3000) crée un tableau de 3000 éléments en mémoire pour stocker les coordonnées des points (chaque point a 3 coordonnées : x, y, z)
    return random.inSphere(new Float32Array(pointCount), { radius: 1.3 });
});

    // déclare une variable d'état pour l'animation des étoiles
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        // Crée un groupe de rotation pour les étoiles
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

// Crée un canvas pour les étoiles
const StarsCanvas = () => {
    return (
        <div className="fixed inset-0 w-full h-full z-[-1]">

            <Canvas camera={{ position: [0, 0, 1] }} aria-hidden="true">
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
