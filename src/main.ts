import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store';
import { setupNaiveUI } from './plugins';
import { setupRouter } from './router';
import './assets/styles/index.css';

// 解决Tailwind覆盖Naive UI样式问题
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

// 挂载pinia
setupStore(app);

// 按需引入Naive UI
setupNaiveUI(app);

// Router准备就绪后挂载app
setupRouter(app).then(() => {
  app.mount('#app');
});
