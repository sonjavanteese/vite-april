<script>
  import Router from 'svelte-spa-router'
  import {routes} from './routes'
  import { navData } from './lib/data'
  import { user } from './lib/stores'
  import { supabase } from './lib/db'
  user.set(supabase.auth.user());
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      user.set(session.user)
      // console.log('SIGNED_IN', session)
    } else {
      user.set(null)
    }
  }) 
</script>


<header>
  <nav class="flex items-center border-b space-x-2 px-2">
    {#each navData as {path, name}}
    <a href="#{path}" class="px-4 py-2 shadow">{name}</a>
    {/each}   
  </nav>
</header>

<main id="main">
  <Router {routes}/>
</main>


<style>
  :root {
    --pw: 680px;
  }
</style>