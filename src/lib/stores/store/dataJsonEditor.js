import fetchJsonEditor from '../../data/api/fetchJsonEditor';
import { writable } from 'svelte/store';
function createSchemList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchJsonEditor();
			set(fetchData);
		}
	}
}
export const dataJsonEditor = createSchemList();


