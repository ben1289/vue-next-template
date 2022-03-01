import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);

  router.beforeEach((to, from) => {
    window.$loadingBar.start();
    console.log(to, from);
  });
  router.afterEach((to, from) => {
    console.log(to, from);
    window.$loadingBar.finish();
  });

  await router.isReady();
}
