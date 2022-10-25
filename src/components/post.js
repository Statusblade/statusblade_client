import React from "react";
import { Container } from "./container";
import { ProfileImage } from "./profileImage";
import styled from 'styled-components'
import ProfilePic from "./assets/profileImage.jpeg";

export const PostInput = styled.textarea`
  font-size: 18px;
  border-radius: 30px;
  background-color: white;
  border: solid 1px black;
  width: 70%;
  height: 70px;
  padding: 15px;
  flex: ${props => props.flex || null};
  ::placeholder {
    color: black;
  }
`;

// const StyledTextarea = styled.textarea`
//   width: 100%;
// `;

const Post = () => {
  return (
    <Container
      background={"rgba(0, 0, 0, 0.7)"}
      height={"auto"}
      width={"100%"}
      margin={"10px"}
      borderRadius={"30px"}
      padding={"10px"}
      marginTop={"20px"}
      display={"flex"}
    >
      <ProfileImage src={ProfilePic} margin={"10px"}/>
      <PostInput flex={1} placeholder={"What's on your mind."}/>
    </Container>
  )
}

export default Post;
