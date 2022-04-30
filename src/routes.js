//@index(['./routes/**/*.svelte'], (f, _) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}'`)

//@endindex
import { wrap } from 'svelte-spa-router/wrap';

import { supabase } from './lib/db';
import BbClassic from './routes/app/classic/bb-classic.svelte';
import Dinfo from './routes/app/dlist/dinfo.svelte';
import Dlist from './routes/app/dlist/dlist.svelte';
import Editor from './routes/app/jedit/editor.svelte';
import Info from './routes/app/jedit/info.svelte';
import List from './routes/app/jedit/list.svelte';
import Studio from './routes/app/studio/studio.svelte';
import NotFound from './routes/not-found.svelte';
import Start from './routes/start.svelte';

const check = () => {
    if (supabase.auth.user()) return true;
};

export const routes = {
    '/': Start,
    '/editor': wrap({
        component: List,
        conditions: [() => check()]
    }),
    '/editor/:id': wrap({
        component: Info,
        conditions: [() => check()]
    }),
    '/editor/edit/:id': wrap({
        component: Editor,
        conditions: [() => check()]
    }),
    '/bb': wrap({
        component: BbClassic,
        conditions: [() => check()]
    }),
    '/bb/*': wrap({
        component: BbClassic,
        conditions: [() => check()]
    }),
    '/studio': wrap({
        component: Studio,
        conditions: [() => check()]
    }),
    '/studio/*': wrap({
        component: Studio,
        conditions: [() => check()]
    }),
    '/dlist': wrap({
        component: Dlist,
        conditions: [() => check()]
    }),
    '/dlist/:id': wrap({
        component: Dinfo,
        conditions: [() => check()]
    }),
    '*': NotFound
}

