import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { welcomeText } from './CompleteNotice';
import { Button } from './button';
import { SmallSpan } from './SmallText';

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
import { updatePasswordAPI } from '@api/user';

export interface UpdatePassword {
  email?: string;
  password: string;
}

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, '비밀번호는 숫자 포함된 8자 이상만 가능합니다.')
    .matches(/.*[0-9].*/, '비밀번호는 숫자 포함된 8자 이상만 가능합니다.')
    .required('비밀번호를 입력해주세요'),
});

const CheckEmail = () => {
  const router = useRouter();

  const updatePassword = useMutation(async (params: UpdatePassword) => await updatePasswordAPI(params), {
    onError: err => {
      console.log(err);
      alert(err);
    },
    onSuccess: data => {
      console.log(data);
      router.replace('/new-password-success');
    },
  });

  return (
    <div css={loginLayout}>
      <div css={loginPanel}>
        <div css={welcomeText}>
          <span>새로운 비밀번호를</span>
          <span>입력해 주세요</span>
        </div>
        <Formik
          initialValues={{
            password: '',
          }}
          validationSchema={PasswordSchema}
          onSubmit={(values, { setSubmitting }: FormikHelpers<UpdatePassword>) => {
            setTimeout(() => {
              try {
                // email도 함께 전달해야 함
                updatePassword.mutate({
                  // 리다이렉트 될 때 내려온 이메일 정보 or atom 사용
                  // email: ,
                  password: values.password,
                });
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
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  css={[
                    underlineInput,
                    values.password !== '' && !errors.password && limeUnderlineInput,
                    values.password !== '' && !touched.password && limeUnderlineInput,
                    errors.password && touched.password && inputError,
                  ]}
                />
                {!errors.password && <SmallSpan text="8자 이상, 숫자 포함" color="#3281F7" marginTop="0.4rem" />}
                <ErrorMessage name="password" component="div" />
              </div>
              <Button
                label="확인"
                type="submit"
                marginBottom="2.4rem"
                backgroundColor={values.password !== '' && !errors.password ? '#3281f7' : '#e4e4e4'}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckEmail;
