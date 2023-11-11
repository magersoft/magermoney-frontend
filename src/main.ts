import './styles/index.scss';

import { ConfigProvider } from 'vant';
import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);

app.use(ConfigProvider);

app.mount('#app');
