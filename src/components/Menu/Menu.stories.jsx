import { Menu } from '.';
import React from 'react';

import mock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: 'Logo',
      srcImg: '',
      link: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
