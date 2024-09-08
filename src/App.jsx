import { BrowserRouter } from "react-router-dom";
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

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 border-x">
                <StarsCanvas />
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Works />
                <Tech />
                <Contact />
            </div>
        </BrowserRouter>
    );
};

export default App;
