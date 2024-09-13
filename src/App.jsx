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

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 border-x">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <StarsCanvas />
                            <Hero />
                            <About />
                            <Experience />
                            <Works />
                            <Tech />
                            <Contact />
                        </>
                    } />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/legal-notice" element={<LegalNotice />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
