import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container } from "./container";
import { ProfileImage } from "./profileImage";
import ProfilePic from "./assets/profileImage.jpeg";
import {
  TodayIcon,
  HomeIcon,
  PagesIcon,
  EmailIcon,
  ChartIcon,
  AnnouncementIcon,
  TuneIcon,
  StorageIcon,
} from "./icons";

const Bar = styled.div`
  height: 100%;
  width: 15%;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 20px;
  transition: 0.5s;
  float: ${(props) => props.float || null};
`;

const NavLink = styled.a`
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 15px;
  color: white;
  display: block;
  transition: 0.3s;
  text-align: left;
  margin: auto;
  margin-left: 12px;

  margin-top: 3px;
`;

const ProfileName = styled.h3`
  color: white;
  font-size: 17px;
`;

const Borderline = styled.hr`
  margin: 20px;
`;

const Navbar = () => {
  return (
    <React.Fragment>
      <Bar float={"left"}>
        <ProfileImage src={ProfilePic} />
        <ProfileName>Palermo Deschamps</ProfileName>
        <Container
          borderRadius={"5px"}
          background={"white"}
          height={"auto"}
          color={"black"}
          width={"50%"}
          margin={"auto"}
        >
          <h3>10 Homies</h3>
        </Container>
        <Borderline />
        <span>
          <NavLink>
            <PagesIcon className="status-icon" />
            Dashboard
          </NavLink>
        </span>
        <span>
          <NavLink>
            <TodayIcon className="status-icon" />
            Calander
          </NavLink>
        </span>
        <span>
          <NavLink>
            <EmailIcon className="status-icon" />
            Mail
          </NavLink>{" "}
        </span>
        <span>
          <NavLink>
            <AnnouncementIcon className="status-icon" />
            Notifications
          </NavLink>{" "}
        </span>
        <span>
          <NavLink>
            <ChartIcon className="status-icon" />
            Analytics
          </NavLink>{" "}
        </span>
        <span>
          <NavLink>
            <TuneIcon className="status-icon" />
            Settings
          </NavLink>{" "}
        </span>
        <span>
          <NavLink>
            <StorageIcon className="status-icon" />
            Storage
          </NavLink>{" "}
        </span>
        <Borderline />
      </Bar>
    </React.Fragment>
  );
};

export default Navbar;
