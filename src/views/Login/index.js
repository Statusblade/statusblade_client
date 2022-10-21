import React from "react";
import { Container } from "../../components/container";
import { Image } from "../../components/image";
import { Header } from "../../components/header";
import Auth from "./auth";
import SocialImage from "../../components/assets/social.jpeg";
import Logo from "../../components/assets/logo.png";

const Login = () => {
  return (
    <Container>
      <Container width={"50%"} float={"left"} color={"white"}>
        <Container
          height={"auto"}
          padding={"15px"}
          width={"auto"}
          margin={"0 auto"}
        >
          <Image src={Logo} height={"600px"} width={"600px"} />
          <Header fontSize={"55px"} marginTop={"-110px"}>Statusblade</Header>
          <Header fontSize={"25px"} marginTop={"-20px"} >The Network For Brands and Content Creators</Header>
        </Container>
      </Container>
      <Container
        background={"blue"}
        width={"50%"}
        float={"left"}
        backGroundImage={SocialImage}
      >
        <Auth />
      </Container>
    </Container>
  );
};

export default Login;
