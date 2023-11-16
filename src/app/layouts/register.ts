import { ModuleNamespace } from 'vite/types/hot';
import { App } from 'vue';

export function registerLayouts(app: App<Element>) {
	const layouts = import.meta.glob<ModuleNamespace>('./**/*.vue', {
		eager: true
	});

	Object.entries(layouts).forEach(([, layout]) => {
		if (layout?.default?.name) {
			app.component(layout?.default?.name, layout?.default);
		}
	});
}
