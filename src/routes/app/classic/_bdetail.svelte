<script>
  import Loader from "../../../lib/flow/Loader.svelte";
  import Page from "../../../lib/flow/Page.svelte";
  import Dheader from "../../../lib/flow/Dheader.svelte";
  import VideoEl from "../../../lib/flow/VideoEl.svelte";
  import { _order, _edit } from "../../../lib/stores";
  import { supabase } from "../../../lib/db";
  export let params;
  let oda, loading, promise, open;
  let daten;
  oda = $_order;
  const getData = async () => {
    let query = supabase.from("bb_classics").select("*");
    try {
      let { data, error } = await query.eq("id", params.id).single();
      if (data) {
        daten = data;
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateData = async (dataEl) => {
    loading = true;
    try {
      const { data, error } = await supabase
        .from("bb_classics")
        .update({
          titel: dataEl.titel,
          tags: dataEl.tags,
          info: dataEl.info,
          fileurl: dataEl.fileurl,
          thumb: dataEl.thumb,
          screen: dataEl.screen,
        })
        .eq("id", dataEl.id);
      await getData();
    } catch (err) {
      console.log(err);
    } finally {
      loading = false;
    }
  };

  const update = () => {
    updateData(dat);
  };
  const reload = () => {
    promise = getData();
  };

  reload();

  $: _order.set(oda);
</script>

<Page>
  <div class="py-4 space-y-4">
    <Dheader pid={2} on:reload={reload} ed={true} />
    {#await promise}
      <Loader />
    {:then payload}
      <section class="bg-white flex flex-col py-4 space-y-4">
        {#if !$_edit}
          <article class="flex justify-center">
            <div
              class="bg-white rounded-lg border border-gray-200 w-full text-gray-600"
            >
              <div
                class="
                        flex
                        flex-col
                        px-4
                        py-2
                        border-b border-gray-200
                        w-full
                        first:rounded-t-lg
                        last:rounded-b-lg
                        last:border-b-0
                        transition
                        duration-500
                        cursor-pointer
                        "
              >
                <span class="text-xl font-semibold">{payload.titel}</span>
                <span class="text-lg">{payload.info}</span>
                <span class="italic">{payload.tags}</span>
                <span class="py-2">
                  <button class="px-2 py-1 rounded text-sm shadow" on:click={() => {open = !open}}>
                  {!open ? 'Video' : 'Thumb'}
                  </button>
                </span>
              </div>
            </div>
          </article>

          {#if !open}
          <img src={payload.thumb} alt="Thumb" class="rounded">
          {:else}
          <VideoEl src={payload.fileurl} poster={payload.screen} />
          {/if}
          
        {:else}
          <article>
            <div class="space-y-2">
              <input
                class="input"
                type="text"
                value={daten.titel}
                placeholder="Titel"
                on:blur={(e) => {
                  daten.titel = e.currentTarget.value;
                }}
                disabled={!$_edit}
              />
              <input
                class="input"
                type="text"
                value={daten.tags}
                placeholder="Tags"
                on:blur={(e) => {
                  daten.tags = e.currentTarget.value;
                }}
                disabled={!$_edit}
              />

              <textarea
                rows="3"
                on:blur={(e) => {
                  daten.info = e.currentTarget.value;
                }}
                disabled={!$_edit}
                class="input">{daten.info}</textarea
              >

              <!-- titel,info,tags,fileurl,screen,thumb,id -->
              <input
                class="input"
                type="text"
                value={daten.fileurl}
                placeholder="File"
                on:blur={(e) => {
                  daten.fileurl = e.currentTarget.value;
                }}
                disabled={!$_edit}
              />
              <input
                class="input"
                type="text"
                value={daten.thumb}
                placeholder="Thumb"
                on:blur={(e) => {
                  daten.thumb = e.currentTarget.value;
                }}
                disabled={!$_edit}
              />
              <input
                class="input"
                type="text"
                value={daten.screen}
                placeholder="Screen"
                on:blur={(e) => {
                  daten.screen = e.currentTarget.value;
                }}
                disabled={!$_edit}
              />
              <div class="py-4">
                <button
                  disabled={!$_edit}
                  class="btn btn-blue"
                  on:click={update}>{loading ? "... loading" : "Update"}</button
                >
              </div>
            </div>
          </article>
        {/if}
      </section>
    {/await}
  </div>
</Page>
