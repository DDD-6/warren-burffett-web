import { css } from '@emotion/react';
import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from './Button';

Yup.setLocale({
  string: {
    email: '이메일 형식을 확인해주세요',
  },
});

interface FormValues {
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
    .min(8, '비밀번호를 8자 이상 입력해주세요')
    .max(50, '길이가 너무 깁니다')
    .matches(/.*[0-9].*/, '비밀번호에 숫자를 포함해주세요')
    .required('비밀번호를 입력해주세요'),
  passwordCheck: Yup.string()
    .required('비밀번호를 확인해주세요')
    .oneOf([Yup.ref('password'), null], '비밀번호를 다시 확인해주세요'),
  agree: Yup.bool().oneOf([true], '동의합니다를 눌러주세요'),
});

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        agree: false,
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
          console.log(JSON.stringify(values));
          setSubmitting(false);
          // try-catch
        }, 500);
      }}
    >
      {({ errors, touched }) => (
        <Form css={formLayout}>
          <div css={fieldLayout}>
            <Field name="name" placeholder="이름" css={[inputDefault, errors.name && touched.name && inputError]} />
            <ErrorMessage name="name" component="div" />
          </div>
          <div css={fieldLayout}>
            <Field
              name="email"
              type="email"
              placeholder="이메일"
              css={[inputDefault, errors.email && touched.email && inputError]}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div css={fieldLayout}>
            <Field
              name="password"
              type="password"
              placeholder="비밀번호"
              css={[inputDefault, errors.password && touched.password && inputError]}
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div css={fieldLayout}>
            <Field
              name="passwordCheck"
              type="password"
              placeholder="비밀번호"
              css={[inputDefault, errors.passwordCheck && touched.passwordCheck && inputError]}
            />
            <ErrorMessage name="passwordCheck" component="div" />
          </div>
          <div css={checkboxLayout}>
            <label css={checkField}>
              <Field type="checkbox" name="agree" />
              동의합니다
              <span></span>
            </label>
            <ErrorMessage name="agree" component="div" />
          </div>
          <Button label="회원가입" type="submit" />
          <Button label="카카오" color="#0B0B0B" backgroundColor="#FFE812" />
          <Button label="네이버" backgroundColor="#00C73C" />
          <Button label="구글" color="#000" backgroundColor="#f8f8f8" />
        </Form>
      )}
    </Formik>
  );
};

export const formLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  // 나중에 지우기
  margin-top: 50px;
  button {
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const fieldLayout = css`
  margin-bottom: 1.4rem;

  input {
    margin-bottom: 0.5rem;
  }

  & > div {
    padding-left: 0.7rem;
    font-size: 1.2rem;
    color: red;
  }

  &:last-of-type {
    margin-bottom: 1.8rem;
  }
`;

export const inputDefault = css`
  width: 38.4rem;
  height: 6.1rem;
  font-size: 2.4rem;
  text-align: center;
  border: 2px solid #eae9ea;
  border-radius: 12px;
`;

export const inputError = css`
  border-color: red;
`;

export const checkboxLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.4rem;

  div {
    color: red;
  }
`;

export const checkField = css`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 2.4rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #000;

  /* Hide default checkbox */
  input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }

  /* Custom checkbox */
  span {
    width: 1.7rem;
    height: 1.7rem;
    position: absolute;
    top: -1px;
    left: 0;
    background-color: #e5e5e5;
  }

  // input 안에 들어갈 check
  span::after {
    display: none;
    width: 0.6rem;
    height: 1.2rem;
    position: absolute;
    left: 3px;
    bottom: 2px;
    content: '';
    border: solid #278eeb;
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  // check 상태로 변하면 check icon이 보임
  input:checked ~ span::after {
    display: block;
  }
`;

export default SignUp;
