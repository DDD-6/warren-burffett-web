import MainImage from '@components/MainImage';
import DivideLine from '@components/DivideLine';
import { mainLayout } from '@styles/index';
import CompleteNotice from '@components/CompleteNotice';

const SignupSuccessPage = () => {
  return (
    <div css={mainLayout}>
      <CompleteNotice firstLine="환영해요!" secondLine="회원가입을 완료했습니다" />
      <DivideLine />
      <MainImage imageUrl="" />
    </div>
  );
};

export default SignupSuccessPage;
