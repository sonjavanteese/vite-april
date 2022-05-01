<script>
  import { _sp } from "../../../lib/data";
  export let seasonlist = [null, 1, 2, 3, 4];
  export let ebtn;
  export let qfilter = {};
  let selected = null;
  let order1 = false;
  let order2 = false;
  let edit = false;

  qfilter.st = $_sp.st ? $_sp.st : null;
  qfilter.od1 = $_sp.od1 ? true : false;
  qfilter.od2 = $_sp.od2 ? true : false;
  qfilter.edit = $_sp.edit ? true : false;
  $: {
    qfilter = {
      st: selected,
      od1: order1,
      od2: order2,
    };
    $_sp.st = selected;
    $_sp.od1 = order1;
    $_sp.od2 = order2;
  }
</script>

<header {...$$restProps}>
  <div class="flex-grow flex flex-col">
    <span class="label">Season Filter</span>
    <select class="input" bind:value={selected}>
      {#each seasonlist as el}
        {#if el !== null}
          <option value={el}>Season {el}</option>
        {:else}
          <option value={null}>All</option>
        {/if}
      {/each}
    </select>
  </div>
  <div class="flex flex-col items-center justify-between">
    <span class="label">ST</span>
    <label for="c1" class="cursor-pointer py-2">
      <input
        type="checkbox"
        bind:checked={order1}
        class="checkbox hidden"
        id="c1"
      />
      <span>
        <i class={!order1 ? "gg-arrow-down" : "gg-arrow-up"} />
      </span>
    </label>
  </div>
  <div class="flex flex-col items-center justify-between">
    <span class="label">Ep</span>
    <label for="c2" class="cursor-pointer py-2">
      <input
        type="checkbox"
        bind:checked={order2}
        class="checkbox hidden"
        id="c2"
      />
      <span>
        <i class={!order2 ? "gg-arrow-down" : "gg-arrow-up"} />
      </span>
    </label>
  </div>
  {#if ebtn}
    <label
      for="c3"
      class="flex flex-col items-center justify-center self-center w-10 h-10 cursor-pointer  rounded {!edit
        ? 'text-red-800 bg-red-50'
        : 'bg-grey-50'}"
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
  {/if}
</header>

<style>
  @import url("../../../lib/assets/arrow-down.css");
  @import url("../../../lib/assets/arrow-up.css");
  @import url("../../../lib/assets/pen.css");
  header {
    @apply flex space-x-4;
  }
</style>
