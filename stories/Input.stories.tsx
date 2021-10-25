import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from '@components/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const String = Template.bind({});
String.args = {
  inputType: 'string',
  placeholder: '이름',
};

export const Email = Template.bind({});
Email.args = {
  inputType: 'email',
  placeholder: '이메일',
};

export const Password = Template.bind({});
Password.args = {
  inputType: 'password',
  placeholder: '비밀번호',
};
