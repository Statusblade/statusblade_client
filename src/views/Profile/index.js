import React from "react";
import { Container } from "../../components/container";
import Navbar from "../../components/navBar";
import { Searchbar } from "../../components/searchbar";
import Networks from "../../components/networks";
import Post from "../../components/post";
import { Image } from "../../components/image";
import Logo from "../../components/assets/logo.png";

const Profile = () => {
  return (
    <React.Fragment>
      <Container height={"100vh"} overflow={"hidden"}>
        <Navbar float={"left"}/>
        <Container display={"flex"} float={"left"} width={"60%"}>
          <Container width={"100%"}>
            <Searchbar placeholder="Search Statusblade" />
            <Networks />
            <Post />

          </Container>

        </Container>
        <Container
          flex={1}
          margin={"15px"}
          padding={"15px"}
          background={"rgba(0, 0, 0, 0.7)"}
          height={"75%"}
          color={"white"}
          borderRadius={"10px"}
          width={"18%"}
          float={"right"}
        >
          <h1>Groups</h1>
        </Container>

        <Image
          src={Logo}
          height={"150px"}
          width={"150px"}
          position={"absolute"}
          right={"0px"}
          bottom={"0px"}
        />
      </Container>
    </React.Fragment>
  );
};

export default Profile;
