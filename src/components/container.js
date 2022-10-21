import styled from 'styled-components'

export const Container = styled.div`
  display: 'block';
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100vh'};
  color:  ${props => props.color || 'black'};
  background: ${props => props.background || 'white'};
  float: ${props => props.float || null};
  padding: ${props => props.padding || '0px'};
  margin: ${props => props.margin || '0px'};
  position: ${props => props.position || null};
  text-align: center;
  justify-content: center;
  margin-top: ${props => props.marginTop || null}
`;
