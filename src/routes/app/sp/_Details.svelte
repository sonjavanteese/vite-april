<script>
	import Collapse from '../../../lib/windi/Collapse.svelte';
  import Loader from "../../../lib/windi/Loader.svelte";
  import { _sp, fetch_south_park } from "../../../lib/data";

  // import { push, link } from 'svelte-spa-router'
  let promise;
  let open;
  export let params;
  let daten = [];
  const getData = (filter) => {
    let f = {};
    if (filter) {
      f = filter;
    }
    return fetch_south_park(f)
      .then((data) => {
        daten = data;
      })
      .then(() => {
        return daten;
      });
  };
  $: {
    promise = getData({id: params.id ? params.id : null, od1: false, od2: false});
  }
</script>

<div class="w-full max-w-xl mx-auto px-2">
  {#await promise}
    <Loader />
  {:then payload}
    <section class="bg-white flex flex-col py-2 space-y-2">
      <!-- <div>Obj with {Object.keys(payload).length} Aguments</div>
      <div>
        {#each Object.keys(payload) as element}
          <span>{element}, </span>
        {/each}
      </div>
      <div class="py-4" /> -->
      <hgroup class="space-y-2 py-4">
        <h2>{payload.titel}</h2>
        <h4>{payload.name}</h4>
        <ul>
          <li>Season : {payload.st ? payload.st : ""}</li>
          <li>Episode: {payload.ep ? payload.ep : ""}</li>
          <li class="italic">
            {payload.tags ? payload.tags : "SouthPark"}
          </li>
          {#if payload.assets && payload.assets.info}
          <Collapse bind:open>
              <li slot="trigger">
                <a href="/" on:click|preventDefault class="flex text-lg font-serif font-semibold"
                class:text-blue-500={!open}
                class:text-gray-500={open}
                  >Info</a
                >
              </li>
          
            <li class="py-2">
              <div class="py-2 pl-6 pr-2 border-l-6 rounded-l">
                <span class="text-sm leading-4 text-gray-500 italic"
                  >{payload.assets.info}</span
                >
              </div>
            </li>
          </Collapse>
          {/if}
          {#if payload.assets && payload.assets.img}
            <li class="p-2 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {#each payload.assets.img as img}
              <figure class="rounded-lg shadow opacity-70 hover:opacity-95 transition transition-opacity duration-200">
                <img src={img} alt="img" class="block h-full w-full object-cover rounded-lg" />
              </figure>
              {/each}
              <figure />
            </li>
          {/if}
        </ul>
      </hgroup>
    </section>
  {/await}
</div>
