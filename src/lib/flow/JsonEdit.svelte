<script>
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { _edit } from '../stores';
  const dispatch = createEventDispatcher();
  import Loader from "./Loader.svelte"
  let jc_form;
  let jsoncreator;
  let loading = true;
  export let options = {};

  const handleCreatorChange = () => {
    let value = jsoncreator.getValue();
    $_edit = value;
    console.log("Editor Change", value);
  };

  const handleCreatorReady = () => {
    console.log("Creator is ready!");
    dispatch("loaded", "Editor Loaded");
  };

  export const initCreator = () => {
    if (jsoncreator) {
      jsoncreator.destroy();
    }
    jsoncreator = new JSONEditor(jc_form, options);
    jsoncreator.on("ready", handleCreatorReady);
    jsoncreator.on("change", handleCreatorChange);
    loading = false;
  };
  onMount(async () => {
    if (options.schema) {
      initCreator();
    }
  });
  onDestroy(() => {
    if (jsoncreator) {
      jsoncreator.destroy();
    }
  });
</script>

<svelte:head>
   <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</svelte:head>

<section {...$$restProps}>
  <div id="json-editor-form" bind:this={jc_form} />
</section>



<style>
  @import url("./boot.css");
  :root {
    --bs-light-rgb: #f6f6f6;
  }
  :global(#json-editor-form img),
  :global(#json-editor-form video) {
    max-width: 100%;
    height: auto;
    max-height: 160px;
	  margin: 1rem 0;
  }
  :global(#json-editor-form .card-title) {
    font-size: 1rem;
  }
  :global(#json-editor-form button) {
    font-size: 1rem;
    @apply py-2 px-3;
  }
</style>
