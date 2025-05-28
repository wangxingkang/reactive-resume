import React from 'react';
import { i18n } from '@lingui/core';
import { detect, fromStorage, fromUrl } from '@lingui/detect-locale';
import { I18nProvider } from '@lingui/react';
import { defaultLocale, dynamicActivate } from '@/lib/lingui';
// @ts-expect-error
import { messages as zhMessages } from '@/locales/zh-CN/messages.po';

i18n.load(defaultLocale, zhMessages);
i18n.activate(defaultLocale);

type Props = {
  children: React.ReactNode;
};

export const LocaleProvider = ({ children }: Props) => {
  const userLocale = defaultLocale;

  React.useEffect(
    () => {
      const detectedLocale = detect(
        fromUrl('locale'),
        fromStorage('locale'),
        userLocale,
        defaultLocale
      ) ?? defaultLocale;

      dynamicActivate(detectedLocale);
    },
    [userLocale]
  );

  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  )
}
