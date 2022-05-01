<script>
  import SpBar from "./_SpBar.svelte";
  import Loader from "../../../lib/windi/Loader.svelte";
  import { _sp, fetch_south_park } from "../../../lib/data";
  import { push, link } from "svelte-spa-router";
  let promise;
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
    promise = getData($_sp);
  }
</script>

<div class="container mx-auto px-2">
  <SpBar class="py-4" />

  {#await promise}
    <Loader />
  {:then payload}
    <section class="bg-white flex flex-col py-4 space-y-4">
      <ul class="list-none divide-y">
        {#each payload as { titel, name, id, tags, assets, st, ep }}
          <li>
            <a
              href="/{$_sp.edit ? 'serien/edit' : 'serien/detail'}/{id}"
              class="flex justify-between py-2 px-2"
              use:link
            >
              <div class="flex flex-col">
                <span class="text-lg font-medium">
                  {titel}
                </span>
                <span class="text-sm text-gray-400 font-thin italic">
                  {name}
                </span>
              </div>
              <div>
              <span class="text-sm">{st <= 9 ? `0${st}` : st}-{ep <= 9 ? `0${ep}` : ep}</span>
              </div>
            </a>
          </li>
        {:else}
          <li>... loading</li>
        {/each}
      </ul>
    </section>
  {/await}
</div>
