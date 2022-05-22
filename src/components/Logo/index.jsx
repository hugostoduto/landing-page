/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { Heading } from '../Heading';

export const Logo = ({ text, srcImg = '', link }) => {
  return (
    <Heading>
      <Styled.Container>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

Logo.propTypes = {
  text: P.node.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
