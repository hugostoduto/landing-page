/* eslint-disable no-unused-vars */
import React from 'react';
import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad commodi iste earum sint porro illo facilis consectetur nisi nulla rem voluptatibus deleniti vel doloremque, fugiat voluptates id officia ut dolorum.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
