/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export const GridTwoColumn = ({ title, text, background = false, srcImg }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading>{title}</Heading>
        <TextComponent>{text}</TextComponent>
      </Styled.Container>
      <Styled.ImageContainer>
        <Heading>{title}</Heading>
        <TextComponent>{text}</TextComponent>
      </Styled.ImageContainer>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImg: P.bool.isRequired,
};
