import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: inline-grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-gap: 3px;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
`;

// TODO: Replace colors on this files for theme variables
export const IconWrapper = styled.span`
  display: flex;
  width: 20vw;
  height: 100%;
  ${props =>
    props.active ? 'border-bottom: 4px solid #FF47DA;' : ''} & > img {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AppBarStyled = styled.header`
  background: radial-gradient(
    circle,
    rgba(95, 81, 142, 1) 0%,
    rgba(255, 71, 218, 1) 300%
  );
  width: 100%;
  position: fixed;
  bottom: 0;
`;
