import React from 'react';
import { LocaleProvider } from './locale';

interface Props {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  )
}
