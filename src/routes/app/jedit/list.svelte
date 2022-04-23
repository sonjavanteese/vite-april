<script>
  import Dheader from "../../../lib/flow/Dheader.svelte";
  import Loader from "../../../lib/flow/Loader.svelte";
  import Page from "../../../lib/flow/Page.svelte";
  import { user, _order } from "../../../lib/stores";
  import { supabase } from "../../../lib/db";
  let oda, newTask, promise;
  oda = $_order;
  const getData = async (filter) => {
    let filterSets = filter;
    let query = supabase.from("json_editor").select("*");
    if (filterSets) {
      query = query.eq("group", filterSets);
    }
    try {
      let { data, error } = await query
        .select("*")
        .order("id", { ascending: oda });
      if (data) {
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addNew = async () => {
    try {
      const { data, error } = await supabase
        .from("json_editor")
        .insert([{ titel: newTask, uid: $user.id }]);
      // console.log(newTask ? newTask : 'Error')
      await getData();
      newTask = "";
    } catch (err) {
      console.log(err);
    }
  };

  const reload = () => {
    promise = getData();
  };

  reload();

  $: _order.set(oda);
</script>

<Page>
  <section class="py-4 space-y-4">
    <Dheader pid={1} on:reload={reload} />
    {#await promise}
      <Loader />
    {:then payload}
      <div class="flex justify-center">
        <div
          class="bg-white rounded-lg border border-gray-200 w-full text-gray-600"
        >
          {#each payload as { id, titel, info, group }}
            <a
              href="#/editor/{id}"
              class="
                        block
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
              {titel}
            </a>
          {/each}
        </div>
      </div>
    {:catch err}
      <pre>{JSON.stringify(err)}</pre>
    {/await}
  </section>
</Page>
