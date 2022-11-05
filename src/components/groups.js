import React from "react";
import { Image } from "./image";
import { Container } from "./container";
import Mario from "./assets/mario.jpeg";

const Groups = () => {
  return (
    <Container
      flex={1}
      margin={"15px"}
      padding={"15px"}
      background={"rgba(0, 0, 0, 0.7)"}
      height={"35%"}
      color={"white"}
      borderRadius={"10px"}
      width={"18%"}
      float={"right"}
      boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}
    >
      <h1>Groups</h1>
      <hr />
      <Image src={Mario} width={'70px'} height={'70px'} borderRadius={"50%"} margin={'10px'}/>
      <Image src={Mario} width={'70px'} height={'70px'} borderRadius={"50%"} margin={'10px'}/>
      <Image src={Mario} width={'70px'} height={'70px'} borderRadius={"50%"} margin={'10px'}/>
      <Image src={Mario} width={'70px'} height={'70px'} borderRadius={"50%"} margin={'10px'}/>
      <Image src={Mario} width={'70px'} height={'70px'} borderRadius={"50%"} margin={'10px'}/>
      <Image src={Mario} width={'70px'} height={'70px'} borderRadius={"50%"} margin={'10px'}/>


    </Container>
  )
}

export default Groups;
