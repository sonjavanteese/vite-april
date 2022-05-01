<script>
  import { _bb } from "../../../lib/data";
  // export let seasonlist = [null, 1, 2, 3, 4];
  let order1 = false;
  let order2 = false;
  let edit = false;
  
  order1 = $_bb.od1;
  order2 = $_bb.od2;
  edit = $_bb.edit;

  $: {
    $_bb.od1 = order1;
    $_bb.od2 = order2;
    $_bb.edit = edit;
  }
</script>

<header {...$$restProps}>
  <label
    for="c1"
    title={!order1 ? "Id" : "Titel"}
    class="flex flex-col items-center justify-center self-center w-10 h-10 cursor-pointer bg-gray-50 rounded"
  >
    <span class="py-2" style="--ggs: 1;">
      <input
        type="checkbox"
        bind:checked={order1}
        class="checkbox hidden"
        id="c1"
      />
      <span>
        <i class={!order1 ? "gg-space-between" : "gg-space-between-v"} />
      </span>
    </span>
  </label>
  <label
    for="c2"
    title={!order2 ? "Asc" : "Desc"}
    class="flex flex-col items-center justify-center self-center w-10 h-10 cursor-pointer bg-gray-50 rounded"
  >
    <span class="py-2" style="--ggs: 1;">
      <input
        type="checkbox"
        bind:checked={order2}
        class="checkbox hidden"
        id="c2"
      />
      <span>
        <i class={!order2 ? "gg-arrow-down" : "gg-arrow-up"} />
      </span>
    </span>
  </label>
  <span class="flex-grow"></span>

    <label
      for="c3"
      class="flex flex-col items-center justify-center self-center w-10 h-10 cursor-pointer  rounded {!edit
        ? 'text-red-800 bg-red-50'
        : 'bg-gray-50'}"
    >
      <span class="py-2" style="--ggs: 1;">
        <input
          type="checkbox"
          bind:checked={edit}
          class="checkbox hidden"
          id="c3"
        />
        <span>
          <i class="gg-pen" />
        </span>
      </span>
    </label>

</header>

<style>
  @import url("../../../lib/assets/arrow-down.css");
  @import url("../../../lib/assets/arrow-up.css");
  @import url("../../../lib/assets/space-between.css");
  @import url("../../../lib/assets/space-between-v.css");
  @import url("../../../lib/assets/pen.css");
  header {
    @apply flex space-x-1;
  }
</style>
