import DivideLine from '@components/DivideLine';
import MainImage from '@components/MainImage';
import NewPassword from '@components/NewPassword';
import { mainLayout } from '@styles/index';

const NewPasswordPage = () => {
  return (
    <div css={mainLayout}>
      <NewPassword />
      <DivideLine />
      <MainImage imageUrl="" />
    </div>
  );
};

export default NewPasswordPage;
