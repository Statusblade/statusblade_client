import React from "react";
import { Container } from "../../components/container";
import Navbar from "../../components/navBar";
import { Searchbar } from "../../components/searchbar";
import Networks from "../../components/networks";
import Post from "../../components/post";
import { Image } from "../../components/image";
import Logo from "../../components/assets/logo.png";
import Groups from "../../components/groups";
import Trending from "../../components/trending";

const Profile = () => {
  return (
    <React.Fragment>
      <Container height={"100vh"} overflow={"hidden"}>
        <Navbar float={"left"} />
        <Container display={"flex"} float={"left"} width={"60%"}>
          <Container width={"100%"}>
            <Searchbar placeholder="Search Statusblade" />
            <Networks />
            <Post />
          </Container>
        </Container>

        <Groups />
        <Trending />

        <Image
          src={Logo}
          height={"100px"}
          width={"100px"}
          position={"absolute"}
          right={"0px"}
          bottom={"0px"}
        />
      </Container>
    </React.Fragment>
  );
};

export default Profile;
