/* eslint-disable no-unused-vars */
import React from 'react';
import { Heading } from './index';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
    colorDark: true,
    as: 'h1',
    size: 'huge',
    upperCase: false,
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
    upperCase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
