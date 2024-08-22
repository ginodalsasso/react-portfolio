import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress(); // Récupère la progression du chargement

    return (
        // Affiche la progression du chargement
        <Html>
            <span className="canvas-load"></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#f1f1f1",
                    fontWeight: "800",
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}% 
            </p>
        </Html>
    );
};

export default Loader;
