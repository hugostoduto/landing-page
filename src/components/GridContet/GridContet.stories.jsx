/* eslint-disable react/react-in-jsx-scope */
import { GridContent } from '.';

export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    children: 'GridContent',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
