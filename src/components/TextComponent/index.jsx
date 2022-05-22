import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const TextComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
