<script>
  import { addToast } from "../../../lib/toast";
  import Loader from "../../../lib/windi/Loader.svelte";

  import {
    fetch_south_park,
    _south_park,
    _bb,
    fetch_bb_classics,
    supabase,
    sleep,
  } from "../../../lib/data";
  export let params;
  let daten = {};
  let promise;
  let loading;
  const getData = () => {
    fetch_south_park({ id: params.id, od1: false, od2: false }).then((data) => {
      daten = data;
      return data;
    });
  };
  const updateData = async (dataEl) => {
    loading = true;
    try {
      const { data, error } = await supabase
        .from("south_park")
        .update({
          titel: dataEl.titel,
          name: dataEl.name,
          st: dataEl.st,
          ep: dataEl.ep,
          tags: dataEl.tags,
          assets: dataEl.assets,
        })
        .eq("id", dataEl.id);
    } catch (err) {
      console.log(err);
    } finally {
      await sleep(500);
      reload();
      addToast("Data Updated", "Action", "success");
      loading = false;
    }
  };

  const update = () => {
    updateData(daten);
  };
  const reload = () => {
    _south_park.fetchAll();
  };
  promise = getData();
</script>

<!--   <PopModal bind:open>
    <div class="w-full text-left">
      <pre class="overflow-auto">{JSON.stringify(dataDetail, null, 2)}</pre>
    </div>
  </PopModal> -->

<section class="container mx-auto px-2">
  <div class="py-4">
    {#await promise}
      <Loader />
    {:then value}
      <!-- ep,titel,name,st,tags,id,assets -->

      <div class="mb-1">
        <label for="sw1" class="label">Titel</label>
        <input
          type="text"
          class="form-control"
          id="sw1"
          value={daten.titel}
          placeholder="Titel"
          on:blur={(e) => {
            daten.titel = e.currentTarget.value;
          }}
        />
        <small class="text-muted sr-only">Episoden Titel</small>
      </div>
      <div class="mb-1">
        <label for="sw2" class="label">Origin Titel</label>
        <input
          type="text"
          class="form-control"
          id="sw2"
          value={daten.name}
          placeholder="Name"
          on:blur={(e) => {
            daten.name = e.currentTarget.value;
          }}
        />
        <small class="text-muted sr-only">Orginal Titel</small>
      </div>
      <section class="grid grid-cols-2 gap-4 mb-1">
        <div class="">
          <label for="sw3" class="label">Episode</label>
          <input
            type="number"
            class="form-control"
            id="sw3"
            value={daten.ep}
            placeholder="Episode"
            on:blur={(e) => {
              daten.ep = e.currentTarget.value;
            }}
          />
          <small class="text-muted sr-only">Episode</small>
        </div>
        <div class="">
          <label for="sw4" class="label">Staffel</label>
          <input
            type="number"
            class="form-control"
            id="sw1"
            value={daten.st}
            placeholder="Staffel"
            on:blur={(e) => {
              daten.st = e.currentTarget.value;
            }}
          />
          <small class="text-muted sr-only">Staffel</small>
        </div>
      </section>
      <div class="mb-1">
        <label for="sw5" class="label">Tags</label>
        <input
          type="text"
          class="form-control"
          id="sw5"
          value={daten.tags}
          placeholder="Tags"
          on:blur={(e) => {
            daten.tags = e.currentTarget.value;
          }}
        />
        <small class="text-muted sr-only">Tags</small>
      </div>
      <div class="mb-1">
        <label for="sw6" class="label">Data</label>
        <textarea
          class="form-control"
          id="sw6"
          rows="10"
          placeholder="JSON Obj"
          on:blur={(e) => {
            daten.assets = JSON.parse(
              e.currentTarget.value ? e.currentTarget.value : "{}"
            );
          }}>{JSON.stringify(daten.assets, null, 2)}</textarea
        >
        <small class="text-muted sr-only">Episoden Titel</small>
      </div>

      <footer class="flex py-2 space-x-2">
        <button
          on:click={update}
          class="flex w-10 h-10 items-center justify-center shadow rounded"
          class:text-red-600={loading}
          title="Save"><i class="gg-enter" /></button
        >
      </footer>
    {:catch error}
      <div>
        <h1 class="text-red-600">Error</h1>
        <pre>{(JSON.stringify(error), null, 2)}</pre>
      </div>
    {/await}
  </div>
</section>

<style>
  @import "../../../lib/assets/enter.css";
  @import "../../../lib/assets/attachment.css";
</style>
