import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Searchbar = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  background-color: rgba(255, 0, 0, 0.7);
  border: solid 2px black;
  border-radius: 30px;
  box-shadow:rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 100%;
  ::placeholder {
    color: white;
  }
`;
