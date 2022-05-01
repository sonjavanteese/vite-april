<script>
  import { link } from "svelte-spa-router";
  import PageHeader from "../../../lib/windi/PageHeader.svelte";
  import Sidebar from "../../../lib/windi/Sidebar.svelte";
  import Page from "../../../lib/windi/Page.svelte";
  import List from "./_List.svelte";
  import Details from "./_Details.svelte";
  import Edit from "./_Edit.svelte";
  export let params;
  export let pid;
  export let titel = null;
  export let sub = null;
  const prefix = "/serien";
  // $: console.log("PageId", pid, params);
</script>

<Sidebar>
  <!-- Slot -->
  <ul>
    <li>
      <a href="/" class="flex p-2" use:link>Home</a>
    </li>
    <li>
      <a href="/serien" class="flex p-2" use:link>Serien</a>
    </li>
  </ul>
</Sidebar>

{#key pid}
  <Page>
    <PageHeader {titel} {sub} />
    {#if pid == 3}
      <Details {params} />
    {:else if pid == 4}
      <Edit {params} />
    {:else}
      <List />
    {/if}
  </Page>
{/key}
