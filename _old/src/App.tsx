import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Tools from './components/Tools';
import ContactMe from './components/ContactMe';

function App() {
    return (
        <div id="App">
            <Navbar />
            <Hero />
            <main>
                <Works />
                <About />
                <Tools />
                <ContactMe />
            </main>
        </div>
    );
}

export default App;
