import type { App } from 'vue';
import {
  create,
  NConfigProvider,
  NGlobalStyle,
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
} from 'naive-ui';

export function setupNaiveUI(app: App) {
  const naive = create({
    components: [
      NConfigProvider,
      NGlobalStyle,
      NLoadingBarProvider,
      NDialogProvider,
      NNotificationProvider,
      NMessageProvider,
    ],
  });
  app.use(naive);
}
