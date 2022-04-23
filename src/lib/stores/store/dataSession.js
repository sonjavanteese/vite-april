import { writable } from 'svelte/store';

import { fetchClassic } from '../../data/api/fetchSessionData';

function createSessionList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchClassic();
			set(fetchData);
		}
	}
}
export const dataSession = createSessionList();