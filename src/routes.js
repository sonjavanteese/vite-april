//@index(['./routes/*.svelte', './routes/app/**/*.svelte'], (f, _) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}'`)

//@endindex
import { wrap } from 'svelte-spa-router/wrap';

import { supabase } from './lib/data';
import BbClassic from './routes/app/bb/bb-classic.svelte';
import SouthPark from './routes/app/sp/south-park.svelte';
import NotFound from './routes/not-found.svelte';
import Start from './routes/start.svelte';

const check = () => {
    if (supabase.auth.user()) return true;
};

export const routes = {
    '/': Start,
    '/studio': wrap({
        component: BbClassic,
        props: {
            pid: 2,
            titel: "Blackburn Studios",
            sub: "Classic Collection"
        },
        conditions: [() => check()]
    }),
    '/studio/:id': wrap({
        component: BbClassic,
        props: {
            pid: 5,
            titel: "Blackburn Studios",
            sub: "Classic Details"
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

