import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
// @ts-expect-error
import { messages as enMessages } from '@/locales/en-US/messages.po';
// @ts-expect-error
import { messages as zhMessages } from '@/locales/zh-CN/messages.po';

type Props = {
  children: React.ReactNode;
};

i18n.load('en', enMessages);
i18n.load('zh', zhMessages);
i18n.activate('zh');

export const LocaleProvider = ({ children }: Props) => {
  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  )
}
