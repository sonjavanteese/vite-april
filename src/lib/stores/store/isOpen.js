import { writable } from 'svelte/store';

function toggleSidebar() {
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		toggle: () => update(n => (n = !n)),
		show: () => set(true),
		hide: () => set(false)
	};
}

export const isOpen = toggleSidebar();

