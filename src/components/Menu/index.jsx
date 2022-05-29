/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import React, { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/boxicons-regular/Menu';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';

export const Menu = ({ links = [], logoData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        {isOpen ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container isOpen={isOpen} onClick={() => setIsOpen(false)}>
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
