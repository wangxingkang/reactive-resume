import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useLingui } from '@lingui/react/macro';
import { Button } from '@/components/ui/button';

function Login() {
  const { t } = useLingui();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t`Sign in to your account`}
        </h2>
        <h6>
          <span className="opacity-75">
            {t`Don't have an account?`}
          </span>
          <Button asChild variant="link" className="gap-0 px-1.5">
            <Link to="/auth/register">
              {t({ message: 'Create one now', context: 'This is a link to create a new account' })}{' '}
              <ArrowRightIcon className="ml-1" />
            </Link>
          </Button>
        </h6>
      </div>
    </div>
  );
}

export default Login;
