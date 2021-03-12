import React from 'react';
import { Helmet } from 'react-helmet';
import Comment from '../components/Comment/Comment'
import NavBar from '../components/NavBar/NavBar'

const CommentPage = () => {
    return (
        <div>
            <Helmet>
                <title>Comment Page</title>
            </Helmet>
            <NavBar />
            <Comment />
        </div>
    )
}

export default CommentPage
