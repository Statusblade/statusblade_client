import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  margin: ${(props) => props.margin || null};
  position: ${(props) => props.position || null};
  bottom: ${(props) => props.bottom || null};
  right: ${(props) => props.right || null};
  border-radius: ${props => props.borderRadius || "50%"};
`;
