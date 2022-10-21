import styled from 'styled-components'

export const Header = styled.h1`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  margin: ${props => props.margin || null};
  font-size: ${props => props.fontSize || null};
  margin-top: ${props => props.marginTop || null};
`;
