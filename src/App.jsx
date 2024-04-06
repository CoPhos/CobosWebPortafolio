import React, { Fragment } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Profile from './components/Profile'

export default function App() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Profile />
            </main>
        </Fragment>
    )
}
