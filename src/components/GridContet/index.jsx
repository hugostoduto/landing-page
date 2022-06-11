import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const GridContent = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

GridContent.propTypes = {
  children: P.node.isRequired,
};
