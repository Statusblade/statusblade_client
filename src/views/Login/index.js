import React from "react";
import { Container } from "../../components/container";
import { Image } from "../../components/image";
import { Header } from "../../components/header";
import Auth from "./auth";
import SocialImage from "../../components/assets/social.jpeg";
import Logo from "../../components/assets/logo.png";
import Brand from "./brand";

const Login = () => {
  return (
    <React.Fragment>
      <Container>
        <Brand />
        <Auth />
      </Container>
    </React.Fragment>
  );
};

export default Login;
