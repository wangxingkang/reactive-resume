/// <reference types="vite/client" />

declare const appVersion: string;

declare module '*.po' {
  const messages: Record<string, string>;

  export {
    messages,
  }
}
