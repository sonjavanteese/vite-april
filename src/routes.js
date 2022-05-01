//@index(['./routes/*.svelte', './routes/app/**/*.svelte'], (f, _) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}'`)

//@endindex
import { wrap } from 'svelte-spa-router/wrap';

import { supabase } from './lib/data';
import SouthPark from './routes/app/sp/south-park.svelte';
import Studio from './routes/app/studio/studio.svelte';
import NotFound from './routes/not-found.svelte';
import Start from './routes/start.svelte';

const check = () => {
    if (supabase.auth.user()) return true;
};

export const routes = {
    '/': Start,
    '/studio': wrap({
        component: Studio,
        props: {
            pid: 2
        },
        conditions: [() => check()]
    }),
    '/studio/*': wrap({
        component: Studio,
        props: {
            pid: 2
        },
        conditions: [() => check()]
    }),
    '/serien': wrap({
        component: SouthPark,
        props: {
            pid: 1,
            titel: "South Park Collection",
            sub: "Episoden Liste"
        },
        conditions: [() => check()]
    }),
    '/serien/:id': wrap({
        component: SouthPark,
        props: {
            pid: 3,
            titel: "South Park Collection",
            sub: "Episoden Details"
        },
        conditions: [() => check()]
    }),
    '/serien/edit/:id': wrap({
        component: SouthPark,
        props: {
            pid: 4,
            titel: "South Park Collection",
            sub: "Episoden Editor"
        },
        conditions: [() => check()]
    }),
    '*': NotFound
}

