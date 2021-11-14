import { useState } from 'react';
import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, CircleButton } from './Button';
import BoldTitle from './BoldTitle';
import { SmallAnchor, SmallSpan } from './SmallText';

import { fieldLayout, formLayout, underlineInput, inputError, limeUnderlineInput, loginPanel } from '@styles/user';
import { rowJustifyCenter, rowJustifySpaceAround } from '@styles/index';

Yup.setLocale({
  string: {
    email: '정확한 이메일 양식을 입력해주세요',
  },
});

export interface SignInValues {
  email: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required('이메일을 입력해주세요'),
  password: Yup.string().required('비밀번호를 입력해주세요'),
});

const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [finalInfo, setFinalInfo] = useState({
    email: '',
    password: '',
  });

  return (
    <div css={loginPanel}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }: FormikHelpers<SignInValues>) => {
          setTimeout(() => {
            console.log(JSON.stringify(values));
            setSubmitting(false);
            setIsAuthenticated(false);
            setFinalInfo(values);
          }, 500);
        }}
      >
        {({ values, errors, touched }) => (
          <Form css={formLayout}>
            <BoldTitle title="로그인" />
            <div css={fieldLayout}>
              <Field
                name="email"
                type="email"
                placeholder="이메일"
                css={[
                  underlineInput,
                  values.email !== '' && !errors.email && limeUnderlineInput,
                  values.email !== '' && !touched.email && limeUnderlineInput,
                  errors.email && touched.email && inputError,
                  !isAuthenticated &&
                    finalInfo.email === values.email &&
                    finalInfo.password === values.password &&
                    inputError,
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
                  values.password !== '' && !errors.password && limeUnderlineInput,
                  values.password !== '' && !touched.password && limeUnderlineInput,
                  errors.password && touched.password && inputError,
                  !isAuthenticated &&
                    finalInfo.email === values.email &&
                    finalInfo.password === values.password &&
                    inputError,
                ]}
              />
              <ErrorMessage name="password" component="div" />
              {!isAuthenticated && finalInfo.email === values.email && finalInfo.password === values.password && (
                <div css={inputError}>
                  위세이브에 가입되어 있지 않은 계정이거나, 이메일 또는 비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>
            <Button
              label="로그인"
              type="submit"
              marginBottom="2.4rem"
              backgroundColor={
                values.email !== '' && !errors.email && values.password !== '' && !errors.password
                  ? '#3281f7'
                  : '#e4e4e4'
              }
            />
            <div css={rowJustifyCenter} style={{ marginBottom: '4.8rem' }}>
              <SmallAnchor href="/" text="비밀번호 찾기" marginRight="1.6rem" />
              <SmallSpan text="|" marginRight="1.6rem" />
              <SmallAnchor href="/signup" text="회원가입" />
            </div>
            <div css={rowJustifySpaceAround}>
              <CircleButton sns="google" />
              <CircleButton sns="google" />
              <CircleButton sns="google" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
