import { useState } from 'react';
import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { Button, CircleButton } from './Button';
import BoldTitle from './BoldTitle';
import { SmallAnchor, SmallSpan } from './SmallText';

import {
  fieldLayout,
  formLayout,
  grayUnderlineInput,
  inputError,
  lastField,
  limeUnderlineInput,
  loginLayout,
  loginPanel,
  underlineInput,
} from '@styles/user';
import { rowJustifyCenter, rowJustifySpaceAround } from '@styles/index';
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
  const router = useRouter();
  const [existUser, setExistUser] = useState(false);

  const signup = useMutation(async (params: SignUpValues) => await signupAPI(params), {
    onError: err => {
      console.log(err);
      setExistUser(true);
    },
    onSuccess: data => {
      console.log(data);
      console.log('회원가입 성공!');
      setExistUser(false);
      // 회원가입 완료 페이지로 이동
      router.replace('/signup-success');
      // 회원가입 input 초기화
    },
  });

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
                signup.mutate(values);
              } catch (err) {
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
                {existUser && <div css={inputError}>위세이브에 이미 가입된 계정입니다.</div>}
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
                {(values.password === '' || !errors.password) && (
                  <SmallSpan text="8자 이상, 숫자 포함" color="#3281F7" marginTop="0.4rem" />
                )}
                <ErrorMessage name="password" component="div" />
              </div>
              <div css={[fieldLayout, lastField]}>
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
              <Button
                label="회원가입"
                type="submit"
                marginBottom="2.4rem"
                backgroundColor={
                  values.name !== '' &&
                  values.email !== '' &&
                  values.password !== '' &&
                  values.passwordCheck !== '' &&
                  !errors.name &&
                  !errors.email &&
                  !errors.password &&
                  !errors.passwordCheck
                    ? '#3281f7'
                    : '#e4e4e4'
                }
              />
              <div css={rowJustifyCenter} style={{ marginBottom: '4.8rem' }}>
                <SmallAnchor href="/signin" text="로그인" />
              </div>
              <div css={rowJustifySpaceAround}>
                <CircleButton type="button" sns="naver" />
                <CircleButton type="button" sns="kakao" />
                <CircleButton type="button" sns="google" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
