import CompleteNotice from '@components/CompleteNotice';
import DivideLine from '@components/DivideLine';
import MainImage from '@components/MainImage';
import { mainLayout } from '@styles/index';

const NewPasswordSuccessPage = () => {
  return (
    <div css={mainLayout}>
      <CompleteNotice firstLine="비밀번호 재설정을" secondLine="완료했습니다!" />
      <DivideLine />
      <MainImage imageUrl="" />
    </div>
  );
};

export default NewPasswordSuccessPage;
