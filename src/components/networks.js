import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Container } from "./container";

const Networks = () => {
  return (
    <Container
      background={"rgba(0, 0, 0, 0.6)"}
      height={"auto"}
      width={"100%"}
      margin={"10px"}
      padding={"10px"}
      borderRadius={"15px"}
      boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}
    >
      <SocialIcon network="twitter" className="social-icon"/>
      <SocialIcon network="linkedin" className="social-icon"/>
      <SocialIcon network="facebook" className="social-icon"/>
      <SocialIcon network="youtube" className="social-icon"/>
      <SocialIcon network="instagram" className="social-icon"/>
      <SocialIcon network="tiktok" className="social-icon"/>
    </Container>
  );
};

export default Networks;
