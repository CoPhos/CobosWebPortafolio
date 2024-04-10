import React, { Fragment } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About';
import Technologies from './components/Technologies';

export default function App() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Profile />
                <About />
                <Technologies />
            </main>
        </Fragment>
    )
}
