import React from 'react'

const CommentList = ({comments,removeHandleButtonClick}) => {
    return (
        <ul>
           {comments.map((comment,index)=>(
               <>
               <li key={index}>{comment}</li>
               <button onClick={()=>removeHandleButtonClick(index)}>Sil</button>
               </>
           ))} 
        </ul>
    )
}

export default CommentList
