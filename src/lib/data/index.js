// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
export { default as fetch_bb_classics } from './api/fetch_bb_classics';
export { default as fetch_json_editor } from './api/fetch_json_editor';
export { default as fetch_profiles } from './api/fetch_profiles';
export { default as fetch_south_park_se } from './api/fetch_south_park_se';
export { default as fetch_south_park } from './api/fetch_south_park';
export { default as sleep } from './api/sleep';
export { default as supabase } from './api/supabase';
export { default as appData } from './static/appData';
export { default as navData } from './static/navData';
export { default as pageData } from './static/pageData';
// @endindex
// @index(['./stores/**/*.js'], f => ` export { ${f.name} } from '${f.path}';`)
export { _app } from './stores/_app';
export { _bb_classics } from './stores/_bb_classics';
export { _edit } from './stores/_edit';
export { _editop } from './stores/_editop';
export { _order } from './stores/_order';
export { _profil } from './stores/_profil';
export { _south_park } from './stores/_south_park';
export { user } from './stores/user';
// @endindex

