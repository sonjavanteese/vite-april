import supabase from './supabase';

// { type: 'supabase' table: 'json_editor', keys: 'id,titel,info,created_at,startval,group,option,schema' }

export const fetchJsonEditor = async (filter) => {
    let filterSets = filter;
    let query = supabase.from("json_editor").select("*");
    if (filterSets) {
        query = query.eq("group", filterSets);
    }
    query = query
        .order("group", {ascending: true})
        .order("id", {ascending: true});

    let { data, error } = await query;
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};

export const fetchJsonEditorDetail = async (id) => {
	let { data, error } = await supabase.from('json_editor').select("*").eq('id', id).single();
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};
export default fetchJsonEditor;
