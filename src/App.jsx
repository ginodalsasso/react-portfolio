import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LegalNotice from "./components/LegalNotice"; 
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/Language"; 

const App = () => {
    return (
        <BrowserRouter>
            {/* Encapsule toute l'application dans LanguageProvider */}
            <LanguageProvider>
                    <Navbar />  {/* Navbar peut accéder au contexte */}
                <div className="relative border">
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <StarsCanvas />
                                    <Hero />
                                    <About />  {/* About peut accéder au contexte */}
                                    <Experience />
                                    <Works />
                                    <Tech />
                                    <Contact />
                                </>
                            } 
                        />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/legal-notice" element={<LegalNotice />} />
                    </Routes>
                    <Footer />
                </div>
            </LanguageProvider>
        </BrowserRouter>
    );
};

export default App;
