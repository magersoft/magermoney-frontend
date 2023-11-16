import './app/styles/index.scss';
import '@vant/touch-emulator';

import { createApp } from 'vue';

import { registerLayouts } from '@/app/layouts';
import { registerPlugins } from '@/app/plugins';

import App from './app/App.vue';

const app = createApp(App);

registerLayouts(app);
registerPlugins(app);

app.mount('#app');
