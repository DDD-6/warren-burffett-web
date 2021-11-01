import { ComponentMeta, ComponentStory } from '@storybook/react';

import UnderlineInput from '@components/UnderlineInput';

export default {
  title: 'Example/UnderlineInput',
  component: UnderlineInput,
} as ComponentMeta<typeof UnderlineInput>;

const Template: ComponentStory<typeof UnderlineInput> = args => <UnderlineInput {...args} />;

export const blackBorderInput = Template.bind({});
blackBorderInput.args = {
  placeholder: '이름',
};

export const grayBorderInput = Template.bind({});
grayBorderInput.args = {
  placeholder: '이름',
  borderBottomColor: '#b9b9b9',
};

export const limeBorderInput = Template.bind({});
limeBorderInput.args = {
  placeholder: '이름',
  borderBottomColor: '#dbeb27',
};

export const errorBorderInput = Template.bind({});
errorBorderInput.args = {
  placeholder: '이름',
  borderBottomColor: '#fd4e4e',
};
