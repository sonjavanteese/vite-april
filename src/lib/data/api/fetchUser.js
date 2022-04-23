import supabase from './supabase';

// { type: 'supabase' table: 'profiles', keys: 'id,username,avatar_url,website,updated_at,img_url,step1' }


export const fetchUser = async (id) => {
	
let { data, error } = await supabase.from('profiles').select('*').eq('id', id).single();
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};

export default fetchUser;

