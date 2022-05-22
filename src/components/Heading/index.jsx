import p from 'prop-types';

import React from 'react';
import * as Styled from './styles';
export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  upperCase = false,
}) => {
  return (
    <Styled.Title
      upperCase={upperCase}
      size={size}
      as={as}
      colorDark={colorDark}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: p.node.isRequired,
  colorDark: p.bool,
  as: p.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: p.oneOf(['huge', 'big', 'medium', 'small']),
  upperCase: p.bool,
};
