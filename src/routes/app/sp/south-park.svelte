<script>
  import { link } from "svelte-spa-router";
  import PageHeader from "../../../lib/windi/PageHeader.svelte";
  import Sidebar from "../../../lib/windi/Sidebar.svelte";
  import Page from "../../../lib/windi/Page.svelte";
  import List from "./_List.svelte";
  import Details from "./_Details.svelte";
  import Edit from "./_Edit.svelte";
  import Add from "./_Add.svelte";
  import { _sp } from "../../../lib/data";
  export let params;
  export let pid;
  export let titel = null;
  export let sub = null;
  let open;
  let bg = "bg-blue-700";
  $: switch (pid) {
    case 3:
      bg = "bg-blue-600";
      break;
    case 4:
      bg = "bg-red-800";
      break;
    default:
      bg = "bg-blue-700";
      break;
  }
  $: {
    bg = $_sp.edit ? "bg-red-800" : "bg-blue-700";
  }
</script>

<Sidebar bind:open>
  <ul class="list-none divide-y" on:click={() => (open = false)}>
    <li>
      <a href="/" class="flex px-2" use:link>Home</a>
    </li>
    <li>
      <a href="/serien" class="flex px-2" use:link>Serien</a>
    </li>
    <li>
      <a href="/serien/add" class="flex px-2" use:link>Add Serie</a>
    </li>
    <li>
      <a href="/studio" class="flex px-2" use:link>Studio</a>
    </li>
  </ul>
</Sidebar>

{#key pid}
  <Page>
    <PageHeader {titel} {sub} class="{bg} text-white" />
    {#if pid == 3}
      <Details {params} />
    {:else if pid == 4}
      <Edit {params} />
    {:else if pid == 7}
      <Add />
    {:else}
      <List />
    {/if}
  </Page>
{/key}
