<script>
  import { Modal, Content, Trigger } from "sv-popup";
  import { push, link } from "svelte-spa-router";
  import Page from "../lib/flow/Page.svelte";
  import SignIn from "../lib/flow/SignIn.svelte";
  import UserPanel from "../lib/flow/UserPanel.svelte";
  
  import { pageData } from "../lib/data";
  import { user } from "../lib/stores";
  let { titel, sub } = pageData[0];
</script>

<Page style="--pw: 500px;">
  <div class="absolute inset-0 flex flex-col items-center justify-center">
    <hgroup class="text-center py-8 space-y-4">
      <h2 class="text-semibold">{titel}</h2>
      <h4>{sub}</h4>
    </hgroup>

    {#if !$user}
      <Modal basi small={true}>
        <Content>
          <SignIn />
        </Content>
        <Trigger>
          <button class="btn btn-blue">Sign In</button>
        </Trigger>
      </Modal>
    {:else}
      <div class="grid grid-cols-2 gap-2">
        <button class="btn btn-blue" on:click={() => push('/editor')}> Start </button>
        <Modal basi small={true}>
          <Content>
            <UserPanel />
          </Content>
          <Trigger>
            <button class="btn btn-blue">User</button>
          </Trigger>
        </Modal>
      </div>
    {/if}
  </div>
</Page>
