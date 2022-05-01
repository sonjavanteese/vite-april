<script>
  import Popup from "./_auth/_Popup.svelte";
  import { fade } from "svelte/transition";
  import Form from "./_auth/_Form.svelte";
  import User from "./_auth/_User.svelte";
  import logout from "./_auth/logout";
  import { user } from "../data";
  export let popup = true;
</script>

{#if !popup}
  <div class="relative">
    {#key $user}
      <section transition:fade={{ duration: 400 }}>
        {#if $user}
          <User {...$$restProps} />
        {:else}
          <Form {...$$restProps} />
        {/if}
      </section>
    {/key}
  </div>
{:else if $user}
  {#if $$slots.auth}
    <slot name="auth" />
  {:else}
    <Popup>
      <button slot="trigger" class="btn btn-blue">User</button>
      <User {...$$restProps} />
    </Popup>
  {/if}
{:else}
  <Popup>
    <button slot="trigger" class="btn btn-red">Signin</button>
    <Form {...$$restProps} />
  </Popup>
{/if}

{#if $user}
  <slot><!-- optional fallback --></slot>
{/if}

<style>
  section {
    @apply absolute top-0 inset-x-0 bg-white;
  }
</style>
