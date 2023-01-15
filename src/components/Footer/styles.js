/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    a {
      color: 'inherit';
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
