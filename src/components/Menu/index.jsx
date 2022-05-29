/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/boxicons-regular/Menu';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';

export const Menu = ({ links = [], logoData }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Styled.Button>{isOpen ? <CloseIcon /> : <MenuIcon />}</Styled.Button>
      <Styled.Container isOpen={isOpen}>
        <SectionContainer>
          <Styled.MenuContainer>
            <Logo {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,

  logoData: P.shape(Logo.propTypes).isRequired,
};
