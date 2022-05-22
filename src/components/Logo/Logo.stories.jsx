/* eslint-disable react/react-in-jsx-scope */
import { Logo } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    text: 'Logo',
    src: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
    srcImg: 'https://via.placeholder.com/150',
  },
  argTypes: {
    text: { type: 'string' },
    src: { type: 'string' },
    link: { type: 'string' },
    srcImg: { type: 'string' },
  },
};

export const TextOnly = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  );
};
export const Image = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  );
};
TextOnly.args = {
  srcImg: '',
};
