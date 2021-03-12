import styled from 'styled-components';

export const CommentContainer = styled.div`
    margin-top:100px;
    flex-grow:1;
`;
export const CommentHeader =styled.h3`
    margin-top:20px;
    margin-bottom:10px;
`;

export const AddedComment=styled.div`
    display:flex;
`;

export const NewComment = styled.div`
    margin-top:30px;
`;

export const CommentBox = styled.p`
    margin-top:20px;
    background-color:gainsboro;
    font-size:17px;
`;

export const InputStyle=styled.textarea`
    height:100px;
    width:100%;
    font-size:17px;
`;

export const Button=styled.button`
    margin-top:20px;
    margin-left:20px;
    width:25%;
    height:30px;
    background-color:lightsalmon;
    font-weight:bold;
`;

export const CommentNumber=styled.p`
    margin-left:10px;
    font-size:18px;
    font-weight:bold;
`;