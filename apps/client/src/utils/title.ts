import { t } from '@lingui/core/macro';

export function getPageTitle(text?: string) {
  const prefix = t`Reactive Resume`;

  if (!text) {
    return prefix;
  }

  return `${text} - ${prefix}`;
}
