<script>
  import { _order, _edit, pageData } from "../data";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let pid = 0;
  export let ed = false;
  let { titel, sub } = pageData[pid];
  let oda, edit;
  oda = $_order;
  edit = $_edit;

  const reload = () => {
    dispatch("reload", "Reload")
  };

  $: _order.set(oda);
  $: _edit.set(edit);
</script>

<hgroup class="flex items-center justify-between">
        <div>
          <h4>{titel}</h4>
          <span>{sub}</span>
        </div>
        {#if ed}
        <label class="text-gray-800">
          <span class="text-sm">Edit</span>
          <input
            bind:checked={edit}
            class="ml-2 checkbox"
            type="checkbox"
          />
        </label>
        {:else}
        <label class="text-gray-800">
          <span class="text-sm">Order Asc</span>
          <input
            bind:checked={oda}
            on:change={reload}
            class="ml-2 checkbox"
            type="checkbox"
          />
        </label>
      {/if}
</hgroup>

