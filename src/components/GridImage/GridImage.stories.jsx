import React from 'react';
import { GridImage } from './index';
import mock from './mock';
export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
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
