import { useState, useEffect, useCallback } from "react";

// Hook personnalisé pour détecter si l'utilisateur est sur un appareil mobile
const useIsMobile = (maxWidth = 500) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMediaQueryChange = useCallback((event) => {
        setIsMobile(event.matches);
    }, []);

    useEffect(() => {
        // Détecte si la largeur de l'écran est inférieure ou égale à maxWidth
        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

        // Définit l'état `isMobile` en fonction de la correspondance actuelle du media query
        setIsMobile(mediaQuery.matches);

        // Ajoute un écouteur pour détecter les changements de taille d'écran
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Nettoie l'écouteur d'événements lorsqu'il n'est plus nécessaire
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, [handleMediaQueryChange, maxWidth]); // tableau de dépendances

    return isMobile;
};

export default useIsMobile;
