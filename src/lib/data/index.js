// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
export { default as fetchDb } from './api/fetchDb';
export { default as fetchJsonEditor } from './api/fetchJsonEditor';
export { default as fetchSessionData } from './api/fetchSessionData';
export { default as fetchUser } from './api/fetchUser';
export { default as sleep } from './api/sleep';
export { default as supabase } from './api/supabase';
export { default as appData } from './static/appData';
export { default as navData } from './static/navData';
export { default as pageData } from './static/pageData';
// @endindex

