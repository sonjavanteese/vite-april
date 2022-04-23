<script>
  import Page from "../lib/flow/Page.svelte";
  import SignIn from "../lib/flow/SignIn.svelte";
  import UserPanel from "../lib/flow/UserPanel.svelte";
  import { pageData } from "../lib/data";
  import { user } from '../lib/stores';
  let { titel, sub } = pageData[0];
</script>

<Page style="--pw: 400px;">

    <hgroup class="text-center py-12 space-y-4">
      <h2 class="text-semibold">{titel}</h2>
      <h4>{sub}</h4>
    </hgroup>
    {#if !$user}
       <SignIn />
    {:else}
       <UserPanel />
    {/if}

</Page>
