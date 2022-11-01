import styled from 'styled-components'

export const ProfileImage = styled.img`
  display: inline-block;
  width: ${props => props.width || "50px"};
  height: ${props => props.height || "50px"};
  border-radius: 50%;
  border: 4px solid white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: ${props => props.margin || '0px'};
  flex: ${props => props.flex || null};
  float: ${props => props.float || null};
`;
