import type {
  LoadingBarProviderInst,
  DialogProviderInst,
  NotificationProviderInst,
  MessageProviderInst,
} from 'naive-ui';

declare global {
  interface Window {
    $loadingBar: LoadingBarProviderInst;
    $dialog: DialogProviderInst;
    $notification: NotificationProviderInst;
    $message: MessageProviderInst;
  }

  interface LoginParams {
    userName: string;
    password: string;
  }
}
