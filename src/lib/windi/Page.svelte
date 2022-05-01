<script>
	
  import { fade } from "svelte/transition";

  const op_dura = 400;
  const op_out = { duration: op_dura };

</script>




<section transition:fade={op_out} {...$$restProps}>
  <div>
    <slot />
  </div>
</section>

<style>
  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: +1;
    background-color: var(--app-bg, #ffffff);
  }
  div {
    width: 100%;
    max-width: var(--pw, 100%);
    padding: 0;
    margin: 0 auto;
  }
</style>
