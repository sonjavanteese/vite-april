<script>
  import Loader from "../../../lib/flow/Loader.svelte";
  import Page from "../../../lib/flow/Page.svelte";
  import Dheader from "../../../lib/flow/Dheader.svelte";
  import { _order, _edit } from "../../../lib/stores";
  import { supabase } from "../../../lib/db";
  export let params;
  let oda, loading, promise;
  let daten;
  oda = $_order;
   const getData = async () => {
    let query = supabase.from("datalist").select("*");
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
        .from("datalist")
        .update({
          titel: dataEl.titel,
          group: dataEl.group,
          info: dataEl.info,
          daten: dataEl.daten,
          op: dataEl.op,
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
        <div class="flex justify-center">
          <div
            class="bg-white rounded-lg border border-gray-200 w-full text-gray-600"
          >
            <a
              href="#/bb/{payload.id}"
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
                        hover:bg-gray-100 hover:text-gray-500
                        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
                        transition
                        duration-500
                        cursor-pointer
                        "
            >
              <span class="text-lg">{payload.titel}</span>
              <span class="italic">{payload.info}</span>
            </a>
          </div>
        </div>

        <div>
          <!-- content here -->

          <div class="space-y-2">
            <input
              class="input"
              type="text"
              value={daten.titel}
              placeholder="Enter text"
              on:blur={(e) => {
                daten.titel = e.currentTarget.value;
              }}
              disabled={!$_edit}
            />
    
            <select
              value={daten.group}
              on:blur={(e) => {
                daten.group = e.currentTarget.value;
              }}
              disabled={!$_edit}
              class="input"
            >
              <option>Image</option>
              <option>Video</option>
              <option>Link</option>
            </select>
    
            <textarea
              rows="3"
              on:blur={(e) => {
                daten.info = e.currentTarget.value;
              }}
              disabled={!$_edit}
              class="input">{daten.info}</textarea
            >
            <textarea
              rows="10"
              on:blur={(e) => {
                daten.daten = JSON.parse(e.currentTarget.value);
              }}
              disabled={!$_edit}
              class="input">{JSON.stringify(daten.daten, null, 2)}</textarea
            >
            <div class="py-1">
              <label class="text-gray-600 space-x-4">
                <input
                  class="checkbox"
                  checked={daten.op}
                  on:blur={(e) => {
                    daten.op = e.currentTarget.checked;
                  }}
                  disabled={!$_edit}
                  type="checkbox"
                />
                <span class="text-lg">Show</span>
              </label>
            </div>
    
            <div class="py-4">
              <button disabled={!$_edit} class="btn btn-blue" on:click={update}
                >{loading ? "... loading" : "Update"}</button
              >
            </div>
          </div>
        </div>
      </section>
    {/await}
  </div>
</Page>
