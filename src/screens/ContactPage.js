import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact/Contact'
import NavBar from '../components/NavBar/NavBar'

const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
            <NavBar/> 
            <Contact />
        </div>
    )
}

export default ContactPage
