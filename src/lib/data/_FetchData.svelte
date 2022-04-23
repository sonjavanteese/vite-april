<script>
  import SelectItem from './_SelectItem.svelte';
  import {dataJsonEditor} from './dataStore';
  if (!$dataJsonEditor.length) {
    dataJsonEditor.fetchAll();
  }
  let selComp = SelectItem;
  let dataList;
  const unsubscribe = dataJsonEditor.subscribe((value) => {
        dataList = value;
  });
  
</script>

<section class="themed">
  <article class="max-w-md mx-auto flex flex-col justify-center min-h-20">
  {#await dataList}
  <div
      style="border-top-color: transparent;"
      class="w-10 h-10 mx-auto border-4 border-blue-400 border-dotted rounded-full animate-spin"
      >
  </div>
  {:then payload}
  <SelectItem 
    on:select={(event) => {
        console.log("Select", event.detail);
    }} 
    on:clear={(event) => {
      console.log("Clear", event.detail);
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

