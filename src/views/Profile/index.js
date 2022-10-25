import React from "react";
import { Container } from "../../components/container";
import Navbar from "../../components/navBar";
import { Searchbar } from "../../components/searchbar"
import Networks from "../../components/networks"
import Post from "../../components/post"

const Profile = () => {
  return (
    <React.Fragment>
      <Container>
        <Searchbar placeholder="Search Statusblade"/>
        <Navbar />
        <Container>
          <Networks />
          <Post />
        </Container>
        
      </Container>
    </React.Fragment>
  );
};

export default Profile;
