/* eslint-disable react/react-in-jsx-scope */
import { GridTwoColum } from './index';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore?`,
    srcImg: 'assets/images/javascript.svg',
    background: false,
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
    background: { type: 'bool' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
