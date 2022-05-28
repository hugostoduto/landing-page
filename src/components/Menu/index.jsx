/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <Logo {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,

  logoData: P.shape(Logo.propTypes).isRequired,
};
