import React from "react";
import { Routes, Route } from "react-router-dom";

import FlatDesignOverlay from './components/flat-design/FlatDesignOverlay'
import Home from "./components/homepage/Home";

export default function App(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flat-design" element={<FlatDesignOverlay />} />
        </Routes>
    )
}

