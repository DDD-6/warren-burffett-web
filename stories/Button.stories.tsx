import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const SignUp = Template.bind({});
SignUp.args = {
  label: '회원가입',
};

export const Kakao = Template.bind({});
Kakao.args = {
  label: '카카오',
  color: '#0B0B0B',
  backgroundColor: '#FFE812',
};

export const Naver = Template.bind({});
Naver.args = {
  label: '네이버',
  backgroundColor: '#00C73C',
};

export const Google = Template.bind({});
Google.args = {
  label: '구글',
  color: '#000',
  backgroundColor: '#f8f8f8',
};
