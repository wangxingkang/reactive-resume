import type { z } from 'zod';
import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { useLingui, Trans } from '@lingui/react/macro';
import { loginSchema } from '@reactive-resume/dto';
import { usePasswordToggle } from '@/hooks/usePasswordToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';

type FormValues = z.infer<typeof loginSchema>;

function Login() {
  const { t } = useLingui();
  const formRef = useRef<HTMLFormElement>(null);
  usePasswordToggle(formRef);

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: '',
      password: ''
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
    } catch {
      form.reset();
    }
  };

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

      <div>
        <Form {...form}>
          <form
            ref={formRef}
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t`Email`}</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="email"
                      className="lowercase"
                      placeholder="john.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{t`You can also enter your username.`}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t`Password`}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    <Trans>
                      Hold <code className="text-xs font-bold">Ctrl</code> to display your password
                      temporarily.
                    </Trans>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex mt-4 items-center gap-x-4">
              <Button type="submit" className="flex-1">
                {t`Sign in`}
              </Button>

              <Button asChild variant="link" className="px-4">
                <Link to="/auth/forgot-password">{t`Forgot Password?`}</Link>
              </Button>
            </div>
          </form>
      </Form>
      </div>
    </div>
  );
}

export default Login;
