import React, { Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useIsMobile from '../hooks/useIsMobile';

const AbstractShape = React.memo(({ isMobile, controlsRef }) => {
    const { scene } = useGLTF("./paradox_abstract/scene.gltf");
    const objectRef = useRef();

    const scaleValue = useMemo(() => (isMobile ? 1.3 : 2.8), [isMobile]);
    const positionValue = useMemo(() => (isMobile ? [0, -1, 0] : [0, 0, 0]), [isMobile]);

    return (
        <mesh ref={objectRef}>
            <directionalLight
                position={[1, 10, 5]}
                intensity={isMobile ? 10 : 12}
            />
            <primitive object={scene} scale={scaleValue} position={positionValue} />
        </mesh>
    );
});

const AbstractShapeCanvas = () => {
    // Utilisation du hook personnalisé pour vérifier si l'utilisateur est sur mobile
    const isMobile = useIsMobile(500); 

    // Référence pour les contrôles de la caméra (par exemple, OrbitControls)
    const controlsRef = useRef();

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
        }
    }, []); // Cet effet ne s'exécutera qu'une seule fois après le premier rendu

    const memoizedOrbitControls = useMemo(
        () => <OrbitControls autoRotate ref={controlsRef} enableZoom={false} />,
        []
    );

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
                <AbstractShape isMobile={isMobile} controlsRef={controlsRef} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AbstractShapeCanvas;
