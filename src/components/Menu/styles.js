/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';
import { theme } from '../../styles/theme';

const menuOpen = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, isOpen }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${theme.colors.mediumGray};
    background-color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    & ${Heading} {
      margin-bottom: 0;
      margin-top: 0;
    }
    @media ${theme.media.mobile} {
      visibility: hidden;
      opacity: 0;
      height: 100vh;
      ${isOpen && menuOpen(theme)};
      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }
      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;
export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.mobile} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    cursor: pointer;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: none;
    @media ${theme.media.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    border: none;
    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
