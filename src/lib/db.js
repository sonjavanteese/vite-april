import { createClient } from '@supabase/supabase-js';

import { sleep } from './data';
import { user } from './stores';

export const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);


export const handAuthAction = async (userObj) => {
	await sleep(2000);
	user.set(userObj);
	console.log("AUTH:  handAuthAction")
};


export const logIn = async (email, password) => {
	try {
		let {
			user,
			error
		} = await supabase.auth.signIn({
			email,
			password
		})
		if (user) {
			console.log("FORM:  Login Succeed!");
			handAuthAction(user);
		}
		return user;
	} catch (error) {
		console.error(error)
	}
};


export const logOut = async () => {
	try {
		let { error } = await supabase.auth.signOut();
		if (!error) {
			console.log("FORM:  logout success")
			handAuthAction(null);
		}
	} catch (error) {
		console.error(error);
	}
};

export const list = async (filter) => {
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
export const create = async (id) => {
	let { data, error } = await supabase.from('json_editor').select("*").eq('id', id).single();
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};