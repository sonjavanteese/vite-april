// @index(['./**/*.svelte', './store/*.js'], (f, _, e) => `export { ${f.name} } from '${f.path}';`)
export { appOps } from './store/appOps';
export { dataJsonEditor } from './store/dataJsonEditor';
export { isOpen } from './store/isOpen';
export { theme } from './store/theme';
// @endindex


// @index(['./x**/*.svelte', './xstore/*.js'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)

// @endindex
// @index(['./**/*.svelte'], (f, _, e) => `${e.isFirst ? '/* \n import { \n' : ''} ${_.pascalCase(f.name)}${e.isLast ? '\n } from "lib/_liblist"; \n*/' : ','}`)

// @endindex
// @index(['x../data/api/**/*.js', 'x./static/**/*.js'], f => `// import ${f.name} from '${f.path}';`)

// @endindex