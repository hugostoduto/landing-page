/* eslint-disable react/react-in-jsx-scope */
import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque error
          perferendis accusamus iusto expedita quo? Adipisci, maiores amet
          accusamus neque tenetur molestiae deleniti voluptatum molestias,
          suscipit optio, similique id aspernatur.
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
