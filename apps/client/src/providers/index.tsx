import { LocaleProvider } from './locale';

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  )
}
