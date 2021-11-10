import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Projects from '../Components/Projects';
import Resume from '../Components/Resume';
import HomePage from '../Components/HomePage';

export default function App() {
    return (
        <>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
