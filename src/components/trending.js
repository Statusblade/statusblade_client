import React from "react";
import { Container } from "./container";

const Trending = () => {
  return (
    <Container
      flex={1}
      margin={"15px"}
      padding={"15px"}
      background={"rgba(0, 0, 0, 0.0)"}
      height={"35%"}
      color={"white"}
      borderRadius={"10px"}
      width={"18%"}
      float={"right"}
      boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}
      color={"black"}
    >
      <h1>Trending</h1>
      <hr />
      <ul>
        <li><a href="#">#KanyeWest</a></li>
        <li><a href="#">#AmericaElection</a></li>
        <li><a href="#">#DonaldTrump</a></li>
        <li><a href="#">#Nintendo</a></li>
        <li><a href="#">#KanyeWest</a></li>
        <li><a href="#">#AmericaElection</a></li>
        <li><a href="#">#DonaldTrump</a></li>
        <li><a href="#">#Nintendo</a></li>
      </ul>
    </Container>
  )
}

export default Trending;
