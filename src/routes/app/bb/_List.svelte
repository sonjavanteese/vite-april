<script>
  import BbBar from './_BbBar.svelte';
  import Loader from '../../../lib/windi/Loader.svelte'
  import { _bb, fetch_bb_classics } from '../../../lib/data'
  import { push, link } from 'svelte-spa-router'
  let promise
  let qfilter = {}
  let daten = []
  const getData = (filter) => {
    let f = {}
    if (filter) {
      f = filter
    }
    return fetch_bb_classics(f)
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
  
  <BbBar bind:qfilter class="py-4" />

  {#await promise}
    <Loader />
  {:then payload}
    <section class="bg-white flex flex-col py-4 space-y-4">
      <ul>
        {#each payload as { titel,info,tags,screen,fileurl,thumb,id }}
          <li>
            <a href="/studio/{id}" class="flex justify-between" use:link>
              <span>
                {titel}
              </span>
              <span class="capitalize">{tags ? tags : 'Blackburn'} / {id <= 9 ? `0${id}` : id}</span>
              </a>
          </li>
        {:else}
          <li>... loading</li>
        {/each}
      </ul>
    </section>
  {/await}
</div>


