<script>
  import Loader from "../../../lib/flow/Loader.svelte";
  import Page from "../../../lib/flow/Page.svelte";
  import Dheader from "../../../lib/flow/Dheader.svelte";
  import { _order, _edit } from "../../../lib/stores";
  import { supabase } from "../../../lib/db";
  import {
    TabControl,
    TabControlItem,
  } from "renderless-svelte";
  export let params;
  let oda, loading, promise;
  let daten;
  oda = $_order;
   const getData = async () => {
    let query = supabase.from("json_editor").select("*");
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
      // id,titel,info,created_at,startval,group,option,schema
      const { data, error } = await supabase
        .from("json_editor")
        .update({
          titel: dataEl.titel,
          group: dataEl.group,
          info: dataEl.info,
          schema: dataEl.schema,
          startval: dataEl.startval,
          option: dataEl.option,
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
    updateData(daten);
  };
  const reload = () => {
    promise = getData();
  };

  reload();

  $: _order.set(oda);
</script>

<Page style="--pw: 100%;">
  <div class="py-4 space-y-4">
    <Dheader pid={2} on:reload={reload} ed={true} />
    {#await promise}
      <Loader />
    {:then payload}
    <TabControl>
      <div class="flex flex-row" slot="tabs" let:tabs>
        {#each tabs as { active, disabled, payload, select }}
          <button
            class="
              block font-medium text-sm
              leading-tight
              w-full
              transition transition-all duration-400
              border-x-0 border-t-0 border-b-2
              px-6
              py-3
              my-2
              outline-none
              {active
              ? 'border-blue-500 hover:bg-blue-50'
              : 'border-gray-100 hover:bg-gray-50'}
              hover:bg-gray-100
              focus:outline-none
              "
            on:click={select}
            {disabled}>{payload}</button
          >
        {/each}
      </div>
      <div class="mt-4">
        <TabControlItem id="S" payload="Info" active>
          <div class="py-2">
            <ul class="list-none">
              <li class="text-xl">
                {payload.titel}
              </li>
              <li class="py-1">
                Id: {payload.id}
              </li>
              <li class="py-1">
                {payload.group}
              </li>
              <li class="py-1">
                {payload.info}
              </li>
            </ul>
            <div class="mt-6">
              <a href="#/editor/edit/{params.id}" class="btn btn-blue">Open in Editor</a>
            </div>
          </div>
        </TabControlItem>
        <TabControlItem id="R" payload="Schema">
          <div class="py-2">
            <textarea
              class="input"
              disabled={!$_edit}
                        on:blur={(e) => {
                          payload.schema = JSON.parse(e.currentTarget.value);
                        }}          
              rows="20">{JSON.stringify(payload.schema, null, 2)}</textarea
            >
          </div>
          <div class="py-4">
            <button disabled={!$_edit} class="btn btn-blue" on:click={update}
              >{loading ? "... loading" : "Update"}</button
            >
          </div>
        </TabControlItem>
        <TabControlItem id="H" payload="Options">
          <div class="py-2">
            <textarea
            disabled={!$_edit}
              class="input"
                          on:blur={(e) => {
                            payload.option = JSON.parse(e.currentTarget.value);
                          }} 
              rows="20">{JSON.stringify(payload.option, null, 2)}</textarea
            >
          </div>
          <div class="py-4">
            <button disabled={!$_edit} class="btn btn-blue" on:click={update}
              >{loading ? "... loading" : "Update"}</button
            >
          </div>
        </TabControlItem>
        <TabControlItem id="D" payload="Start Value">
          <div class="py-2">
            <textarea
            disabled={!$_edit}
              class="input"
                          on:blur={(e) => {
                            payload.startval = JSON.parse(e.currentTarget.value);
                          }} 
              rows="20">{JSON.stringify(payload.startval, null, 2)}</textarea
            >
          </div>
          <div class="py-4">
            <button disabled={!$_edit} class="btn btn-blue" on:click={update}
              >{loading ? "... loading" : "Update"}</button
            >
          </div>
        </TabControlItem>
      </div>
    </TabControl>
    {/await}
  </div>
</Page>
