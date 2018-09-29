/**
 * Styles for Add Goal Page
 */

import styled from 'styled-components';

export const Header = styled.h2`
  color: #5f518e;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 36px;
  font-weight: 300;
  text-shadow: 0.1px 0.1px #666666;
`;

export const Section = styled.section`
  padding: 16px;
`;

export const TwoColumnRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-gap: 12px;
`;
// TODO: Add color, and font-size as a config variable
