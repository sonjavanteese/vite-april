import supabase from './supabase';

// { type: 'supabase' table: 'south_park', keys: 'ep,titel,name,st,tags,id,assets' }

export const fetch_south_park = async (filter) => {
  let filterSets = filter
  let query = supabase.from('south_park').select('*')
  if (filterSets && filterSets.id) {
    query = query.eq('id', filterSets.id).single()
  } else if (filterSets && filterSets.st) {
    query = query.eq('st', filterSets.st)
  }

  query = query
    .order('st', { ascending: !filterSets.od1 })
    .order('ep', { ascending: !filterSets.od2 })

  let { data, error } = await query
  if (data) {
    return data
  } else {
    throw new Error(error, data)
  }
}

export default fetch_south_park
