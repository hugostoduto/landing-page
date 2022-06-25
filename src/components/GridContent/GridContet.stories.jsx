<<<<<<<< HEAD:src/components/GridContent/GridContent.stories.jsx
import GridContent from './index';
import React from 'react';
========
import React from 'react';
import { GridContent } from './index';
>>>>>>>> 52ee53b2f69b0170f539ab8ffaf46e6d10833ccb:src/components/GridContent/GridContet.stories.jsx

import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
