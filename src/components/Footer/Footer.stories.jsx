import React from 'react';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'Feito com ❤ por Otávio Miranda',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
