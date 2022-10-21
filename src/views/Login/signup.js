import React from "react";
import { Container } from "../../components/container";
import { FormGroup, Label, Input, Message } from "../../components/forms";
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";

const Signup = () => {
  return (
    <Container height={'auto'}>
      <FormGroup>
        <Label htmlFor="label">Email</Label>
        <Input id="label"  placeholder={'mrbeast9000@youtube.com'}/>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input  placeholder={'Password'}/>
      </FormGroup>
      <GoogleLoginButton onClick={() => alert("Hello")} />
      <FacebookLoginButton onClick={() => alert("Hello")} />
      <InstagramLoginButton onClick={() => alert("Hello")} />
    </Container>
  );
};

export default Signup
