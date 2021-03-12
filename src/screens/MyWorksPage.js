import React from 'react'
import { Helmet } from 'react-helmet'
import MyWorks from '../components/MyWorks/MyWorks'
import NavBar from '../components/NavBar/NavBar'

const MyWorksPage = () => {
    return (
        <div>
            <Helmet>
                <title>My Works</title>
            </Helmet>
            <NavBar />
            <MyWorks />
        </div>
    )
}

export default MyWorksPage
