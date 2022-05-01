<script>
  import { push, link } from "svelte-spa-router";
  import Page from "../lib/windi/Page.svelte";
  import Sidebar from "../lib/windi/Sidebar.svelte";
  import Slides from "./app/_Slides.svelte";
  import Auth from "../lib/windi/Auth.svelte";
  import logout from "../lib/windi/_auth/logout";
  import { user, navData, appData } from "../lib/data";
  const pid = 0;
  let { head } = appData[pid];
  let open;
</script>

<Sidebar bind:open>
  <div class="flex flex-col p-2">
    <ul>
      {#each navData as { path, name, icon, sub }, i}
        {#if i != 0 && !sub}
          <li>
            <a href={path} use:link>{name}</a>
          </li>
        {/if}
      {:else}
        <li>... loading</li>
      {/each}
    </ul>
    {#if $user}
      <div class="flex flex-col py-4">
          <button on:click={logout} class="btn btn-red w-full">
            Logout
          </button>
      </div>
    {/if}
  </div>
</Sidebar>

{#if !$user}
  <Page>
    <header
      class="py-12 px-4 text-center bg-pink-800 text-white bg-no-repeat bg-contain"
      style="background-image: url({head.bg ? head.bg : ''});"
    >
      <hgroup class="py-4 space-y-4">
        <h2>{head.titel ? head.titel : "Nwp-Studio"}</h2>
        <h4>
          {#if $user}
            {head.sub ? head.sub : "Startseite"}
          {:else}
            Signed Out
          {/if}
        </h4>
      </hgroup>
    </header>
    <hr />
    <section class="container mx-auto px-2">
      <div class="py-4">
        <Auth popup class="shadow bg-white rounded-lg w-full" />
      </div>
    </section>
  </Page>
{:else}
  <Slides current={0} />
{/if}
