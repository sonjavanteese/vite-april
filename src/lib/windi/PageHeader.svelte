<script>
  export let titel = 'Page Titel'
  export let sub = 'Sub Heading'
  export let btn = false
</script>

<style>
  header {
    @apply px-4 py-4 text-center;
  }
</style>

<header {...$$restProps}>
  <hgroup class="space-y-4 py-4">
    <h2>{titel}</h2>
    <h4>{sub}</h4>

    <p class="space-x-2">
      {#if btn}
        <a
          href="/"
          on:click|preventDefault={() => history.back()}
          class="btn shadow">
          Back
        </a>
      {/if}

      <slot />
    </p>
  </hgroup>
</header>
<hr />
