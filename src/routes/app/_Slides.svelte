<script>
  import { fade } from "svelte/transition";
  import Slide from "./_Slide.svelte";
  import Auth from "../../lib/windi/Auth.svelte";
  const slides = [
    ["Slide1", "https://nwp-cgn.de/img/poser/imgA02.png", Auth],
    ["Slide2", "https://nwp-cgn.de/img/poser/imgA03.png", false],
    ["Slide3", "https://nwp-cgn.de/img/poser/imgA04.png", false],
    ["Slide4", "https://nwp-cgn.de/img/poser/imgA05.png", false],
  ];
  let min = 0;
  // export let max = slides.length - 1;
  export let current = 1;
</script>

<div transition:fade={{ duration: 200 }}>
  {#each slides as [name, file, component], i}
    <Slide show={current == i} {name} {file}>
      {#if component}
        <svelte:component this={component} class="bg-white rounded-lg" />
      {:else}
        <h1>{name}</h1>
      {/if}
    </Slide>
  {/each}
</div>

<style>
  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    background-color: #fff;
  }
</style>
