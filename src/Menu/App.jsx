import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu.jsx";
import DriftPage from "./DriftPage.jsx";
import ForzaPage from "./ForzaPage.jsx";
import HomePage from "./HomePage.jsx";
import TimeAttackPage from "./TimeAttackPage.jsx";

export default function App() {
    return (
        <>
            <Menu />
            <div className="page">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/drift" element={<DriftPage />} />
                    <Route path="/timeattack" element={<TimeAttackPage />} />
                    <Route path="/forza" element={<ForzaPage />} />
                </Routes>
            </div>
        </>
    );
}
