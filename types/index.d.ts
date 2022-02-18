import type { DialogProviderInst } from 'naive-ui';

declare global {
  interface Window {
    $dialog: DialogProviderInst;
  }

  interface LoginParams {
    userName: string;
    password: string;
  }
}
