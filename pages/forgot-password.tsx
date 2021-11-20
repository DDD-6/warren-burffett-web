import CheckEmail from '@components/CheckEmail';
import DivideLine from '@components/DivideLine';
import MainImage from '@components/MainImage';
import { mainLayout } from '@styles/index';

const ForgotPasswordPage = () => {
  return (
    <div css={mainLayout}>
      <CheckEmail />
      <DivideLine />
      <MainImage imageUrl="" />
    </div>
  );
};

export default ForgotPasswordPage;
