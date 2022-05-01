<script>
    import * as transitions from 'svelte/transition'
    export let open = false
    export let animation = 'slide'
      let _animation = transitions[animation]
    $: _animation = typeof animation === 'function' ? animation : transitions[animation]
      function toggle() {
      open = !open
    }
  </script>
  
  <section {...$$restProps}>
    <div class="collapse-trigger" on:click={toggle}>
      <slot name="trigger" />
    </div>
    {#if open}
      <div transition:_animation|local>
        <slot />
      </div>
    {/if}
  </section>

  <style>
    section {
        @apply flex flex-col;
    }
</style>