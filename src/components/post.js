import React from "react";
import { Container } from "./container";
import { ProfileImage } from "./profileImage";
import {
  PhotoIcon,
  VideoIcon,
  BlogIcon,
  LinkIcon
} from "./icons";

import styled from 'styled-components'
import ProfilePic from "./assets/profileImage.jpeg";

export const PostInput = styled.input`
  font-size: 18px;
  border-radius: 10px;
  background-color: white;
  border: solid 1px black;
  width: 90%;
  height: 20px;
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
      background={"rgba(0, 0, 0, 0.9)"}
      height={"auto"}
      width={"100%"}
      margin={"10px"}
      borderRadius={"10px"}
      padding={"10px"}
      marginTop={"20px"}
      display={"block"}
      boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}
    >
    <Container width={"100%"} height={"auto"} display={"flex"} marginTop={"15px"}>
      <Container float={"left"} flex={1} height={"auto"}>
        <ProfileImage src={ProfilePic} margin={"5px"} width={"35px"} height={"35px"}/>
      </Container>
      <PostInput placeholder={"What's on your mind."}/>
    </Container>

    <Container height={"auto"} width={"100%"} marginTop={"10px"}>
    <span className="status-span">
      <PhotoIcon className="status-icon" />
        Select Photo
    </span>

      <span className="status-span">
        <VideoIcon className="status-icon" />
          Post Video
      </span>

      <span className="status-span">
        <BlogIcon className="status-icon" />
          Write Blog
      </span>

      <span className="status-span">
        <LinkIcon className="status-icon" />
          Share Link
      </span>
    </Container>


    </Container>
  )
}

export default Post;
