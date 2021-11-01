import { Form, Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from './Button';
import BoldTitle from './BoldTitle';
import { SmallAnchor } from './SmallText';

import {
  centerLayout,
  fieldLayout,
  formLayout,
  grayUnderlineInput,
  inputError,
  limeUnderlineInput,
  underlineInput,
} from '@styles/user';
import { rowJustifyFlexEnd } from '@styles/index';

Yup.setLocale({
  string: {
    email: '정확한 이메일 양식을 입력해 주세요',
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
        {({ values, errors, touched }) => (
          <Form css={formLayout}>
            <BoldTitle title="FORGOT PASSWORD" />
            <div css={fieldLayout}>
              <Field
                name="email"
                type="email"
                placeholder="가입했던 이메일 주소 입력"
                css={[
                  underlineInput,
                  values.email !== '' && !touched.email && limeUnderlineInput,
                  values.email !== '' && touched.email && grayUnderlineInput,
                  errors.email && touched.email && inputError,
                ]}
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <Button label="전송하기" type="submit" marginBottom="1.4rem" />
            <div css={rowJustifyFlexEnd}>
              <SmallAnchor href="/signin" text="로그인" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordReset;
