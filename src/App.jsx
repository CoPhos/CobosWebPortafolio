import React, { Fragment } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Content from './components/Content'

export default function App() {
    return (
        <Fragment>
            <Navbar/>
            <Content/>
        </Fragment>
    )
}
