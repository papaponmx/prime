import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: inline-grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-gap: 3px;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 48px;
`;


// TODO: Replace tomato on line 19 for the theme color
export const IconWrapper = styled.span`
display: flex;
width: 20vw;
height: 100%;
${props => props.active ? 'border-bottom: 2px solid tomato;' : ''}
& > img {
  margin-left: auto;
  margin-right: auto;
}
`;

export const AppBarStyled = styled.header`
background: radial-gradient(
  circle, 
  rgba(95, 81, 142, 1) 0%, 
  rgba(255, 71, 218, 1) 600%
  );
`;
