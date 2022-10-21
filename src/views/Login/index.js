import React from "react";
import { Container } from "../../components/container";
import Auth from './auth'

const Login = () => {
  return (
    <Container>
      <Container
        background={"black"}
        width={"50%"}
        float={"left"}
        color={"white"}
      >
        <Container height={'auto'} padding={'15px'} width={'30%'} margin={'0 auto'}>
          Image side
        </Container>
      </Container>
      <Container background={"blue"} width={"50%"} float={"left"}>
        <Auth />
      </Container>
    </Container>
  );
};

export default Login;
