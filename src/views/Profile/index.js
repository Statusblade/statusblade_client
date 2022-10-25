import React from "react";
import { Container } from "../../components/container";
import Navbar from "../../components/navBar";
import { Searchbar } from "../../components/searchbar"

const Profile = () => {
  return (
    <React.Fragment>
      <Container>
        <Searchbar placeholder="Search Statusblade"/>
        <Navbar />
      </Container>
    </React.Fragment>
  );
};

export default Profile;
