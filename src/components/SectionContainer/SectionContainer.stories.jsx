/* eslint-disable react/react-in-jsx-scope */
import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque error
          perferendis accusamus iusto expedita quo? Adipisci, maiores amet
          accusamus neque tenetur molestiae deleniti voluptatum molestias,
          suscipit optio, similique id aspernatur.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
