/* eslint-disable no-unreachable */
import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';
export const GridContent = ({ title, html, background = false }) => {
  return;
  <SectionBackground>
    <Styled.Container>
      <Heading uppercase colorDark={!background}>
        {title}
      </Heading>
      <TextComponent>{html}</TextComponent>
    </Styled.Container>
  </SectionBackground>;
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
