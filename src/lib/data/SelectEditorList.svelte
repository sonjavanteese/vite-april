<script>
  import SelectItem from './_SelectItem.svelte';
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import {dataJsonEditor} from '../stores';
  if (!$dataJsonEditor.length) {
    dataJsonEditor.fetchAll();
  }
  export let dataObj;
  let selComp = SelectItem;
  let dataList;
  const unsubscribe = dataJsonEditor.subscribe((value) => {
        dataList = value;
  });
  
</script>

<section class="themed">
  <article class="flex flex-col justify-center min-h-20">
    {#await dataList}
      <div
          style="border-top-color: transparent;"
          class="w-10 h-10 mx-auto border-4 border-blue-400 border-dotted rounded-full animate-spin"
          >
      </div>
    {:then payload}
      <svelte:component this={SelectItem} 
        on:select={(event) => {
            dataObj = event.detail;
            dispatch("change", event.detail);
        }} 
        on:clear={(event) => {
          dataObj = null;
          dispatch("clear", 'Data Clear');
        }} 
        payload={payload} />
    {/await}
  </article>
</section>

<style>
  :global(#select1:focus) {
    --tw-ring-color: transparent;
  }

  .themed {
    --border: 1px solid #e5e5e5;
    --borderRadius: 6px;
    --borderFocusColor: #a3a3a3;
    --borderHoverColor: #f5f5f5;
    --placeholderColor: #737373;
  }
</style>

