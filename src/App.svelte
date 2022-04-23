<script>
  import Router from "svelte-spa-router";
  import { push, location } from "svelte-spa-router";
  import { routes } from "./routes";
  import { navData } from "./lib/data";
  import { user } from "./lib/stores";
  import { supabase } from "./lib/db";
  import { Toasts, addToast } from "./lib/toast";
  user.set(supabase.auth.user());
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      user.set(session.user);
    } else {
      user.set(null);
    }
  });
  function conditionsFailed(event) {
    addToast("User Auth Required", "Authentification Error", "error", 3000);
    push("/");
  }
</script>

<Toasts />


<main id="main">
  <Router on:conditionsFailed={conditionsFailed} {routes} />
</main>
<header>
  <nav class="flex items-center border-t divide-x-1 px-1 text-gray-500">
    {#each navData as { path, name, icon }, i}
    {#if i == 0}
      <a href="#{path}" class="h-12 px-2 w-full flex items-center justify-center {$location === '/' ? 'text-blue-800 bg-gray-50' : ''}"><i class="gg-{icon}"></i></a>
    {:else}
    <a href="#{path}" class="h-12 px-2 w-full flex items-center justify-center {$location.includes(path) ? 'text-blue-800 bg-gray-50' : ''}">
      <i class="gg-{icon}"></i>
    </a>
    {/if}
      
    {/each}
  </nav>
</header>
<style>
  @import url('https://css.gg/terminal.css');
  @import url('https://css.gg/film.css');
  @import url('https://css.gg/database.css');
  @import url('https://css.gg/home.css');
  :root {
    --pw: 680px;
  }
</style>
