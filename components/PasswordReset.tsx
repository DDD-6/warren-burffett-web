import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from './Button';

import { centerLayout, fieldLayout, font24, fontGray, formLayout, inputDefault, inputError } from '@styles/user';

Yup.setLocale({
  string: {
    email: '이메일 형식을 확인해주세요',
  },
});

export interface EmailValues {
  email: string;
}

const EmailSchema = Yup.object().shape({
  email: Yup.string().email().required('이메일을 입력해주세요'),
});

const PasswordReset = () => {
  return (
    <div css={centerLayout}>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={EmailSchema}
        onSubmit={(values, { setSubmitting }: FormikHelpers<EmailValues>) => {
          setTimeout(() => {
            console.log(JSON.stringify(values));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form css={formLayout}>
            <div css={font24}>새로운 비밀번호를 설정해 주세요</div>
            <div css={fontGray}>
              계정에 연결된 이메일 주소를 입력하면 암호를 재설정할 수 있는 링크를 이메일로 보내드릴게요
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
            <Button label="인증메일 전송하기" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordReset;
