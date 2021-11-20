import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { welcomeText } from './CompleteNotice';
import { SmallAnchor } from './SmallText';
import { Button } from './button';

import {
  fieldLayout,
  formLayout,
  inputError,
  lastField,
  limeUnderlineInput,
  loginLayout,
  loginPanel,
  underlineInput,
} from '@styles/user';
import { rowJustifyCenter } from '@styles/index';
import { verifyEmailAPI } from '@api/user';

export interface Email {
  email: string;
}

const EmailSchema = Yup.object().shape({
  email: Yup.string().email().required('이메일을 입력해주세요'),
});

const CheckEmail = () => {
  const router = useRouter();
  const [verified, setVerified] = useState(true);

  const verifyEmail = useMutation(async (params: Email) => await verifyEmailAPI(params), {
    onError: err => {
      console.log(err);
      setVerified(false);
    },
    onSuccess: data => {
      console.log(data);
      setVerified(true);
      router.push('/new-password');
    },
  });

  return (
    <div css={loginLayout}>
      <div css={loginPanel}>
        <div css={welcomeText}>
          <span>회원가입 시 등록했던</span>
          <span>이메일을 입력해주세요</span>
        </div>
        {/* 이메일 input */}
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={EmailSchema}
          onSubmit={(values, { setSubmitting }: FormikHelpers<Email>) => {
            setTimeout(() => {
              try {
                verifyEmail.mutate(values);
              } catch (err) {
                console.log(err);
              }
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ values, errors, touched }) => (
            <Form css={formLayout}>
              <div css={[fieldLayout, lastField]}>
                <Field
                  name="email"
                  type="email"
                  placeholder="이메일"
                  css={[
                    underlineInput,
                    values.email !== '' && !errors.email && limeUnderlineInput,
                    values.email !== '' && !touched.email && limeUnderlineInput,
                    errors.email && touched.email && inputError,
                    !verified && inputError,
                  ]}
                />
                <ErrorMessage name="email" component="div" />
                {!verified && (
                  <div css={inputError}>위세이브에 가입되어 있지 않은 계정이거나, 이메일이 일치하지 않습니다.</div>
                )}
              </div>
              <Button
                label="인증 메일 전송"
                type="submit"
                marginBottom="2.4rem"
                backgroundColor={values.email !== '' && !errors.email ? '#3281f7' : '#e4e4e4'}
              />
              <div css={rowJustifyCenter}>
                <SmallAnchor href="/signin" text="로그인" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckEmail;
