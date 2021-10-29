import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from './Button';
import BoldTitle from './BoldTitle';
import { SmallAnchor, SmallSpan } from './SmallText';

import { signupAPI } from '@api/user';
import {
  centerLayout,
  checkboxLayout,
  checkField,
  fieldLayout,
  formLayout,
  grayUnderlineInput,
  inputError,
  limeUnderlineInput,
  passwordNotice,
  underlineInput,
} from '@styles/user';
import { rowJustifyFlexEnd } from '@styles/index';

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
  // agree: Yup.bool().oneOf([true], '동의합니다를 눌러주세요'),
});

const SignUp = () => {
  return (
    <div css={centerLayout}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordCheck: '',
          agree: false,
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values: SignUpValues, { setSubmitting }: FormikHelpers<SignUpValues>) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 500);
          // try {
          //   const { data: user } = await signupAPI({ ...values });
          //   console.log(user);
          // } catch (err) {
          //   alert(err);
          // }
        }}
      >
        {({ values, errors, touched }) => (
          <Form css={formLayout}>
            <BoldTitle title="SIGN UP" />
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
            {/* <div css={checkboxLayout}>
              <label css={checkField}>
                <Field type="checkbox" name="agree" />
                동의합니다
                <span></span>
              </label>
              <ErrorMessage name="agree" component="div" />
            </div> */}
            <Button label="회원가입" type="submit" marginBottom="1.4rem" />
            <div css={rowJustifyFlexEnd} style={{ marginBottom: '5.8rem' }}>
              <SmallAnchor href="/signin" text="로그인" />
            </div>
            {/* <Button label="카카오" color="#0B0B0B" backgroundColor="#FFE812" />
            <Button label="네이버" backgroundColor="#00C73C" />
            <Button label="구글" color="#000" backgroundColor="#f8f8f8" /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
