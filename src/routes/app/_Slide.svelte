<script>
  export let file;
  export let name;
  export let show;
  let slide;
  $: if (show && slide) {
    slide.scrollIntoView({ behavior: "smooth", block: "center" });
  }
</script>

<section bind:this={slide} style="background-image: url({file});">
  <slot>
    {name}
  </slot>
</section>

<style>
  section {
    border-right: 1px solid #eee;
    padding: 1rem;
    min-width: 100%;
    height: 100%;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }
</style>
