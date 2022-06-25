/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import React from 'react';

describe('<GridContent />', () => {
  it('should render', () => {
    renderTheme(<GridContent>Children</GridContent>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
t;
