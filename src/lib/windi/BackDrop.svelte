<script>
  import { fade } from "svelte/transition";
  import { quintInOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  import { _edit } from '../data';
  const dispatch = createEventDispatcher();
  export let open;
</script>

{#if open}
  <div
    transition:fade={{ duration: 200, easing: quintInOut }}
    on:click={() => {
      open = false;
      dispatch("close", "Close")
    }}
  />
{/if}

<style>
  div {
    @apply fixed inset-0 z-25;
    background: rgba(17, 17, 17, 0.6);
    border-radius: 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(17, 17, 17, 0.44);
    overflow: hidden;
  }
</style>
