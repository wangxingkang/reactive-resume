import { useLingui } from '@lingui/react/macro';

function Login() {
  const { t } = useLingui();

  return (
    <>
      登录页面
      {t`Sign in to your account`}
    </>
  );
}

export default Login;
