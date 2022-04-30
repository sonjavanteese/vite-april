import { writable } from 'svelte/store';

import fetch_bb_classics from '../api/fetch_bb_classics';

function createSessionList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetch_bb_classics();
			set(fetchData);
		}
	}
}
export const _bb_classics = createSessionList();