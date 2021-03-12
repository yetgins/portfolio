import React from 'react';
import { Helmet } from 'react-helmet'
import About from '../components/About/About'
import NavBar from '../components/NavBar/NavBar'

const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <NavBar />
            <About />
        </div>
    )
}

export default AboutPage
