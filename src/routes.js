//@index(['./routes/**/*.svelte'], (f, _) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}'`)

//@endindex
import BbClassic from './routes/app/classic/bb-classic.svelte';
import Dinfo from './routes/app/dlist/dinfo.svelte';
import Dlist from './routes/app/dlist/dlist.svelte';
import Editor from './routes/app/jedit/editor.svelte';
import Info from './routes/app/jedit/info.svelte';
import List from './routes/app/jedit/list.svelte';
import NotFound from './routes/not-found.svelte';
import Start from './routes/start.svelte';

export const routes = {
    '/': Start,
    '/editor': List,
    '/editor/:id': Info,
    '/editor/edit/:id': Editor,
    '/bb': BbClassic,
    '/bb/*': BbClassic,
    '/dlist': Dlist,
    '/dlist/:id': Dinfo,
    '*': NotFound
}

