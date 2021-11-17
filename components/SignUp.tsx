import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, CircleButton } from './Button';
import BoldTitle from './BoldTitle';
import { SmallAnchor, SmallSpan } from './SmallText';

import {
  fieldLayout,
  formLayout,
  grayUnderlineInput,
  inputError,
  limeUnderlineInput,
  loginLayout,
  loginPanel,
  underlineInput,
} from '@styles/user';
import { rowJustifyFlexEnd, rowJustifySpaceAround } from '@styles/index';
import { signupAPI } from '@api/user';

Yup.setLocale({
  string: {
    email: '정확한 이메일 양식을 입력해주세요',
  },
});

export interface SignUpValues {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  agree: boolean;
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('이름을 입력해주세요'),
  email: Yup.string().email().required('이메일을 입력해주세요'),
  password: Yup.string()
    .min(8, '비밀번호는 숫자 포함된 8자 이상만 가능합니다.')
    .matches(/.*[0-9].*/, '비밀번호는 숫자 포함된 8자 이상만 가능합니다.')
    .required('비밀번호를 입력해주세요'),
  passwordCheck: Yup.string()
    .required('비밀번호를 확인해주세요')
    .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
});

const SignUp = () => {
  // const router = useRouter();

  return (
    <div css={loginLayout}>
      <div css={loginPanel}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordCheck: '',
            agree: false,
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values: SignUpValues, { setSubmitting }: FormikHelpers<SignUpValues>) => {
            setTimeout(async () => {
              try {
                const { data: user } = await signupAPI({ ...values });
                if (user) {
                  // router.push('/');
                  // 모달 띄우거나 새로운 페이지 만들거나
                }
              } catch (err) {
                alert(err);
                console.log(err);
              }
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ values, errors, touched }) => (
            <Form css={formLayout}>
              <BoldTitle title="회원가입" />
              <div css={fieldLayout}>
                <Field
                  name="name"
                  placeholder="이름"
                  css={[
                    underlineInput,
                    values.name !== '' && !touched.name && limeUnderlineInput,
                    values.name !== '' && touched.name && grayUnderlineInput,
                    errors.name && touched.name && inputError,
                  ]}
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div css={fieldLayout}>
                <Field
                  name="email"
                  type="email"
                  placeholder="이메일"
                  css={[
                    underlineInput,
                    values.email !== '' && !touched.email && limeUnderlineInput,
                    values.email !== '' && touched.email && grayUnderlineInput,
                    errors.email && touched.email && inputError,
                  ]}
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div css={fieldLayout}>
                <Field
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  css={[
                    underlineInput,
                    values.password !== '' && !touched.password && limeUnderlineInput,
                    values.password !== '' && touched.password && grayUnderlineInput,
                    errors.password && touched.password && inputError,
                  ]}
                />
                {!errors.password && <SmallSpan text="8자 이상, 숫자 포함" color="#ff9233" marginTop="0.4rem" />}
                <ErrorMessage name="password" component="div" />
              </div>
              <div css={fieldLayout}>
                <Field
                  name="passwordCheck"
                  type="password"
                  placeholder="비밀번호 확인"
                  css={[
                    underlineInput,
                    values.passwordCheck !== '' && !touched.passwordCheck && limeUnderlineInput,
                    values.passwordCheck !== '' && touched.passwordCheck && grayUnderlineInput,
                    errors.passwordCheck && touched.passwordCheck && inputError,
                  ]}
                />
                <ErrorMessage name="passwordCheck" component="div" />
              </div>
              <Button label="회원가입" type="submit" marginBottom="1.4rem" />
              <div css={rowJustifyFlexEnd} style={{ marginBottom: '5.8rem' }}>
                <SmallAnchor href="/signin" text="로그인" />
              </div>
              <div css={rowJustifySpaceAround}>
                <CircleButton sns="naver" />
                <CircleButton sns="kakao" />
                <CircleButton sns="google" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
