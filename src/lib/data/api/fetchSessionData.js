import supabase from './supabase';

// { type: 'supabase' table: 'bb_classics', keys: 'titel,info,tags,screen,fileurl,thumb,id' }

export const fetchClassic = async (filter) => {
    let filterSets = filter;
    let query = supabase.from("bb_classics").select("*");
    query = query
        .order("titel", {ascending: true})
        .order("id", {ascending: true});

    let { data, error } = await query;
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};


export const fetchClassicDetail = async (id) => {
	let { data, error } = await supabase.from('bb_classics').select("*").eq('id', id).single();
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};

export default fetchClassic;