import React from 'react';
import { Helmet } from 'react-helmet';
import Home from '../components/Home/Home'
import NavBar from '../components/NavBar/NavBar'

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <NavBar />
            <Home />
        </div>
    )
}

export default HomePage
