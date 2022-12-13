import React from 'react'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
const Routing = () => {
    return (
        <AnimatePresence >
            <Routes  >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>

    )
}

export default Routing