import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Container } from "./container";

const Networks = () => {
  return (
    <Container
      background={"rgba(0, 0, 0, 0.7)"}
      height={"auto"}
      width={"50%"}
      margin={"auto"}
      borderRadius={"30px"}
      padding={"10px"}
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
