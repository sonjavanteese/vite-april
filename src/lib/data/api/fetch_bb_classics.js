import supabase from './supabase';

// { type: 'supabase' table: 'bb_classics', keys: 'titel,info,tags,screen,fileurl,thumb,id' }

export const fetch_bb_classics = async (filter) => {
  let filterSets = filter
  let query = supabase.from('bb_classics').select('*')
  if (filterSets && filterSets.id) {
    query = query.eq('id', filterSets.id).single()
  } else if (filterSets && filterSets.tags) {
    query = query.eq('tags', filterSets.tags)
  }
  query = query
    .order(filterSets.od1 ? 'id' : 'titel', { ascending: !filterSets.od2 })

  let { data, error } = await query
  if (data) {
    return data
  } else {
    throw new Error(error, data)
  }
}

export default fetch_bb_classics
