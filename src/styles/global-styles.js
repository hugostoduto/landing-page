import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: ${theme.colors.mainBg};
    font-family: ${theme.fonts.family.primaryFont};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.family.secondaryFont};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
`}
`;
