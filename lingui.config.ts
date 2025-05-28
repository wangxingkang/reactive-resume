import { defineConfig } from '@lingui/cli';

export default defineConfig({
  format: 'po',
  sourceLocale: 'en-US',
  fallbackLocales: {
    default: 'zh-CN'
  },
  locales: [
    'en-US',
    'zh-CN',
  ],
  catalogs: [
    {
      include: ['<rootDir>/apps/client/src'],
      path: '<rootDir>/apps/client/src/locales/{locale}/messages',
      exclude: ['**/*.d.ts'],
    },
  ],
})
