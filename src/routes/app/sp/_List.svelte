<script>
  import SpBar from './_SpBar.svelte';
  import Loader from '../../../lib/windi/Loader.svelte'
  import { _sp, sleep, fetch_south_park } from '../../../lib/data'
  import { push, link } from 'svelte-spa-router'
  let promise
  let qfilter = {}
  let daten = []
  const getData = (filter) => {
    let f = {}
    if (filter) {
      f = filter
    }
    return fetch_south_park(f)
      .then((data) => {
        daten = data
      })
      .then(() => {
        return daten
      })
  }
  $: {
    promise = getData(qfilter)
    
  }
</script>

<div class="container mx-auto px-2">
  
  <SpBar bind:qfilter />

  {#await promise}
    <Loader />
  {:then payload}
    <section class="bg-white flex flex-col py-4 space-y-4">
      

      <ul>
        {#each payload as { titel, name, id, tags, assets, st, ep }}
          <li>
            <a href="/serien/{id}" class="flex justify-between" use:link>
              <span>
                {titel}
              </span>
              <span>{st <= 9 ? `0${st}` : st}-{ep <= 9 ? `0${ep}` : ep}</span>
              </a>
          </li>
        {:else}
          <li>... loading</li>
        {/each}
      </ul>
    </section>
  {/await}
</div>


