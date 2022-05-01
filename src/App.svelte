<script>
  import Router from "svelte-spa-router";
  import { push, location, link } from "svelte-spa-router";
  import { routes } from "./routes";
  import { supabase, user, _app, navData } from "./lib/data";
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
 // console.log(appData)
</script>

<Toasts />

<main id="main">
  <Router
    on:conditionsFailed={conditionsFailed}
    {routes}
    restoreScrollState={true}
  />
</main>
<header>
  <nav class="flex items-center border-t divide-x-1 px-1 text-gray-500">
    {#each navData as { path, name, icon, sub }, i}
      {#if i == 0}
        <a
          href={path}
          use:link
          class="h-12 px-2 w-full flex items-center justify-center {$location ===
          '/'
            ? 'text-blue-800 bg-gray-50'
            : ''}"><i class="gg-{icon}" /></a
        >
      {:else if !sub}
        <a
          href={path}
          use:link
          class="h-12 px-2 w-full flex items-center justify-center {$location.includes(
            path
          )
            ? 'text-blue-800 bg-gray-50'
            : ''}"
        >
          <i class="gg-{icon}" />
        </a>
      {/if}
    {/each}
  </nav>
</header>

<style>
  @import url("./lib/assets/terminal.css");
  @import url("./lib/assets/film.css");
  @import url("./lib/assets/database.css");
  @import url("./lib/assets/home.css");
</style>
