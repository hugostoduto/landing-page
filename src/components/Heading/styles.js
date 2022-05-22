/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.medium};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.large};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.xlarge};
    `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
    ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme) => css`
  @media ${theme.media.mobile} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, upperCase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSizes[size](theme)};
    ${titleCase(upperCase)};
  `}
`;
