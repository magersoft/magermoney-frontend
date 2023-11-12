import './styles/index.scss';
import '@vant/touch-emulator';

import { createApp } from 'vue';

import { registerLayouts } from '@/layouts';
import { registerPlugins } from '@/plugins';

import App from './App.vue';

const app = createApp(App);

registerLayouts(app);
registerPlugins(app);

app.mount('#app');
