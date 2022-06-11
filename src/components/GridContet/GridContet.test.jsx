import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContet } from '.';
import React from 'react';

describe('<GridContet />', () => {
  it('should render', () => {
    renderTheme(<GridContet>Children</GridContet>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
t;
