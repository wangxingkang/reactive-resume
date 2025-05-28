import React from 'react';
import { i18n } from '@lingui/core';
import { detect, fromStorage, fromUrl } from '@lingui/detect-locale';
import { I18nProvider } from '@lingui/react';
import { defaultLocale, dynamicActivate } from '@/lib/lingui';
import { messages } from '@/locales/zh-CN/messages.po';

// 解决 @tanstack/react-router staticData 中无法使用 i18n 的问题
i18n.loadAndActivate({
  locale: defaultLocale,
  messages
});

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
