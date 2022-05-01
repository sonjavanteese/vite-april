<script>
  import Dheader from "../../../lib/windi/Dheader.svelte";
  import Loader from "../../../lib/windi/Loader.svelte";
  import Page from "../../../lib/windi/Page.svelte";
  import { user, _order, _edit, _editop, supabase } from "../../../lib/data";
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

<Page style="--pw: 100%;">

  {#await promise}
    <Loader />
  {:then payload}
    <section
      class="w-full bg-white flex flex-col py-4 space-y-0"
    >
      <div class="py-2" class:opacity-0={!loaded}>
        <JsonEdit on:loaded={() => { loaded = true }} options={$_editop} />
      </div>
    </section>
  {:catch err}
    <pre>{JSON.stringify(err)}</pre>
  {/await}

</Page>