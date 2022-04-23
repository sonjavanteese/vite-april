<script>
  import Loader from "../../../lib/flow/Loader.svelte";
  import JsonEdit from "../../../lib/flow/JsonEdit.svelte";
  import Page from "../../../lib/flow/Page.svelte";
  import { supabase } from "../../../lib/db";
  import { _editop } from "../../../lib/stores";
  import { slide } from "svelte/transition";
  export let params;
  let loading, promise, selected, loaded;
  const fetchDetail = async () => {
    let query = supabase
      .from("json_editor")
      .select("*")
      .eq("id", params.id)
      .single();
    selected = null;
    loading = true;
    try {
      let { data, error } = await query;
      if (data) {
        selected = data;
        $_editop = data.option;
        $_editop.schema = data.schema;
        $_editop.startval = data.startval;
      } else {
        throw new Error(error, data);
      }
    } catch (error) {
      console.log("fetchDetail", error);
    } finally {
      loading = false;
    }
  };


  promise = fetchDetail();

</script>

<Page>

  {#await promise}
    <Loader />
  {:then payload}
    <section
      class="mx-auto px-4 bg-white flex flex-col py-4 space-y-0"
    >
      <div class="py-2" class:opacity-0={!loaded}>
        <JsonEdit on:loaded={() => { loaded = true }} options={$_editop} />
      </div>
    </section>
  {:catch err}
    <pre>{JSON.stringify(err)}</pre>
  {/await}

</Page>