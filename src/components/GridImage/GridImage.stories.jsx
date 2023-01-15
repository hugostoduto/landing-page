import React from 'react';
import { GridImage } from './index';

export default {
  title: 'GridImage',
  component: GridImage,
  args: {
    children: 'GridImage',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
