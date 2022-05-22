/* eslint-disable no-undef */
import { renderTheme } from '../../styles/renderTheme';
import { NavLinks } from '.';
import React from 'react';

describe('<NavLinks />', () => {
  it('should not render links', () => {
    renderTheme(<NavLinks />);
  });
});
