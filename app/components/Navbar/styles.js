import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: inline-grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-gap: 3px;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  & > span {
    display: flex;
    width: 20vw;
    & > img {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
