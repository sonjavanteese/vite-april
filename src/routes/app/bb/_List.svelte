<script>
  import BbBar from "./_BbBar.svelte";
  import Loader from "../../../lib/windi/Loader.svelte";
  import { _bb, fetch_bb_classics } from "../../../lib/data";
  import { push, link } from "svelte-spa-router";
  let promise;
  let daten = [];
  const getData = (filter) => {
    let f = {};
    if (filter) {
      f = filter;
    }
    return fetch_bb_classics(f)
      .then((data) => {
        daten = data;
      })
      .then(() => {
        return daten;
      });
  };
  $: {
    promise = getData($_bb);
  }
</script>

<div class="container mx-auto px-2">
  <BbBar class="py-4" />

  {#await promise}
    <Loader />
  {:then payload}
    <section class="bg-white flex flex-col py-4 space-y-4">
      <ul class="list-none divide-y">
        {#each payload as { titel, info, tags, screen, fileurl, thumb, id }}
          <li>
            <a
              href="/studio/{id}"
              class="flex justify-between py-2 px-2"
              use:link
            >
              <div class="flex flex-col">
                <span class="text-lg font-medium">
                  {titel}
                </span>
                <span class="text-sm text-gray-400 font-thin italic">
                  {info}
                </span>
              </div>
              <div>
              <span class="text-sm capitalize">{tags ? tags : "Blackburn"} / {id <= 9 ? `0${id}` : id}</span>
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
