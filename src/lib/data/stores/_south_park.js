import { writable } from 'svelte/store';

import fetch_south_park from '../api/fetch_south_park';

function createSessionList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetch_south_park();
			set(fetchData);
		}
	}
}
export const _south_park = createSessionList();