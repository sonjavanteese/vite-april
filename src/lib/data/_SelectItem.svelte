<script>
  import { createEventDispatcher } from "svelte";
  import Select from 'svelte-select';
  // import {dataJsonEditor} from './dataStore';
  const dispatch = createEventDispatcher();
  const groupBy = (item) => item.group;
  const optionIdentifier = 'id';
  const labelIdentifier = 'titel';
  export let payload;
  export let selObj = null;

</script>
<div>

<Select 
    id="select1"
    bind:value={selObj} 
    {optionIdentifier} 
    {labelIdentifier} 
    items={payload} 
    {groupBy}
    on:clear={() => {
    dispatch('clear', 'No Group selected');
    }}
    on:select={(e) => {
    dispatch("select", selObj);
    }}
    on:error={(e) => {
    dispatch("error", 'Select Error');
    }}
    ></Select>    
</div>
    

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

