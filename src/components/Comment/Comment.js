import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  CommentContainer,
  AddedComment,
  NewComment,
  Button,
  CommentBox,
  CommentNumber,
  CommentHeader
} from "./Comment.styles";
import Input from "./Input";

const Comment = () => {
  const [userInput, setUserInput] = useState("");
  const [comments, setComments] = useState([]);
  const refInput = useRef(null);

  const handleButtonClick = () => {
    setComments((prevComments) => [...prevComments,userInput ]);
  };

  const removeHandleButtonClick = (i) => {
    console.log(comments);
    if (i >= 0) {
      comments.splice(i, 1);
      setComments(comments);
    }
    console.log(comments)
  };

  const handleUserInputChange = (event) => {
    const value = event.target.value;
    setUserInput(value);
  };
  
  /*useEffect(() => {
    // degisiklik oldugunda calis
    console.log("useEffect calisti");
    refInput.current.focus();
    
  });*/
  

  const checkUserInput = useCallback(() => {
    if (userInput.length > 0) {
    }
  }, [userInput]);

  /*const checkComments =useCallback(()=>{
    if (comments.length > 1){
    }
  },[comments]);*/

  useEffect(() => {
    // degisiklik oldugunda calis
    checkUserInput();
    console.log("useEffect calisti - userIput:" + userInput);
  }, [userInput]);

  useEffect(() => {
    removeHandleButtonClick();
    console.log("useEffect calisti - checkComments:" + comments);
  })


  console.log(comments);
  return (
    <CommentContainer>
      <h1>Comments</h1>
      <NewComment>
        <CommentHeader>Add a Comment</CommentHeader>
        <Input
          value={userInput}
          onChange={handleUserInputChange}
          ref={refInput}
          placeholder="Add your comment here"
          required
        ></Input>
        <Button onClick={()=>handleButtonClick()}>Add Comment</Button>
      </NewComment>
        <CommentHeader>Comments</CommentHeader>
      {comments?.map((comment, index) => (
        <>
        <AddedComment>
          <CommentNumber>{`${index+1}.`}</CommentNumber>
          <CommentBox>{comment}</CommentBox>
          <Button onClick={()=>removeHandleButtonClick(index)}>Delete</Button>
        </AddedComment>
        </>
      ))}
    </CommentContainer>
  );
};

export default Comment;
