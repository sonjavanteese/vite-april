import supabase from './supabase';

// { type: 'supabase' table: 'bb_classics', keys: 'titel,info,tags,screen,fileurl,thumb,id' }

export const fetch_bb_classics = async (filter) => {
	let filterSets = filter;
	let query = supabase.from('bb_classics').select('*');
	if (filterSets) {
		query = query.eq('id', filterSets).single();
	}
	query = query.order('titel', { ascending: true }).order('id', { ascending: true });

	let { data, error } = await query;
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};

export default fetch_bb_classics;
