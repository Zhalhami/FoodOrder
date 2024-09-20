import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Traning from "./Traning";
import ContactMain from "./ContactMain";
import About from "./About";
import MenuPlan from "./MenuPlan";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu-plan" element={<MenuPlan />} />
                <Route path="/training" element={<Traning />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<ContactMain />} />
            </Routes>
        </Router>
    );
}

export default App;
