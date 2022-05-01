<script>
  import Loader from "../../../lib/windi/Loader.svelte";
  import { _sp, fetch_south_park } from "../../../lib/data";
  // import { push, link } from 'svelte-spa-router'
  let promise;
  export let params;
  let daten = [];
  const getData = (filter) => {
    let f = {};
    if (filter) {
      f.id = filter;
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
    promise = getData(params.id ? params.id : null);
  }
</script>

<div class="container mx-auto px-2">
  {#await promise}
    <Loader />
  {:then payload}
    <section class="bg-white flex flex-col py-2 space-y-2">
      <div>Obj with {Object.keys(payload).length} Aguments</div>
      <div>
        {#each Object.keys(payload) as element}
          <span>{element}, </span>
        {/each}
      </div>
      <div class="py-4" />
      <hgroup class="space-y-2 py-4">
        <h4>{payload.titel}</h4>
        <h5>{payload.name}</h5>
        <ul>
          <li>Season : {payload.st ? payload.st : ""}</li>
          <li>Episode: {payload.ep ? payload.ep : ""}</li>
          <li class="italic">
            {payload.tags ? payload.tags : "SouthPark"}
          </li>
        </ul>
      </hgroup>
    </section>
  {/await}
</div>
