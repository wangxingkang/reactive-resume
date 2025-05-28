import { i18n } from '@lingui/core';

export const defaultLocale = 'zh-CN';

export async function dynamicActivate(locale: string) {
  try {
    const { messages } = await import(`../locales/${locale}/messages.po`);

    if (messages) {
      i18n.loadAndActivate({ locale, messages });
    }
  } catch (error) {
    throw new Error(`Failed to load messages for locale: ${locale}`);
  }
}
