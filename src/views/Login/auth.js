import React from "react";
import { Container } from "../../components/container";
import { Header } from "../../components/header";
import SocialImage from "../../components/assets/social.jpeg";
import Signup from "./signup";
import { FacebookLoginButton } from "react-social-login-buttons";

const Auth = () => {
  return (
    <Container
      background={"blue"}
      width={"50%"}
      float={"left"}
      backGroundImage={SocialImage}
    >
      <Container
        height={"450px"}
        padding={"15px"}
        width={"50%"}
        margin={"0 auto"}
        marginTop={"20%"}
        borderRadius={"10px"}
        border={"solid 5px black"}
      >
        <Header height={"auto"}>Signup for Awesomeness</Header>
        <Signup />
      </Container>
    </Container>
  );
};

export default Auth;
