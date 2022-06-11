import { GridContet } from '.';

export default {
  title: 'GridContet',
  component: GridContet,
  args: {
    children: 'GridContet',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridContet {...args} />
    </div>
  );
};
