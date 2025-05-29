import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { LocaleProvider } from './locale';
import { queryClient } from '@/lib/react-query';

interface Props {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <LocaleProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </LocaleProvider>
  )
}
