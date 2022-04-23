<script>
  import {dataJsonEditor} from '../stores/store/dataJsonEditor';
  if (!$dataJsonEditor.length) {
    dataJsonEditor.fetchAll();
  }
  export let refresh = true;
  let dataList;
  const unsubscribe = dataJsonEditor.subscribe((value) => {
        dataList = value;
  });
  
</script>


{#if refresh}
<nav {...$$restProps}>
    {#if refresh === 'left'}
    <button on:click={() => dataJsonEditor.fetchAll()} class="button">
      <i class="gg-sync"></i>
    </button>
    {/if}
    <span class="flex-1"></span>
    {#if refresh !== 'left'}
    <span class="flex-1"></span>
    <button on:click={() => dataJsonEditor.fetchAll()} class="button">
      <i class="gg-sync"></i>
    </button>
  {/if}
  
</nav>
{/if}

{#await dataList}
<section>
  <span>
    <div
        style="border-top-color: transparent;"
        class="w-10 h-10 border-5 border-blue-600 border-dotted rounded-full animate-spin"
      ></div>
  </span>
</section>

{:then payload}
    <slot {payload}><pre class="p-4 rounded-xl">Array: [{payload.length}]</pre></slot>
{:catch error}
    <div class="block p-4 text-lg text-bold text-red-800 text-center">Error</div>
{/await}

<style>
  @import url('https://unpkg.com/css.gg/icons/css/sync.css');
  :root {
    --btn-size: 34px;
    --btn-p: rgba(37, 99, 235, 1);
    --btn-bg: transparent; 
    --btn-s: #fff);
    --icon-size: 24px;
    --lo-h: 100px;
    --lo-w: 100%;
  }
  .gg-sync {
    --ggs: 24px;
  }
  section {
    width: var(--lo-w);
    min-height: var(--lo-h);
    @apply flex items-center justify-center;
  }
  button {
    color: var(--btn-p);
    background-color: var(--btn-bg);
    width: var(--btn-size);
    height: var(--btn-size);
    @apply flex justify-center items-center shadow rounded-full transition duration-300;
  }

  button:hover {
    color: var(--btn-s, #ffffff);
    background-color: var(--btn-p);
  }
  nav {
   @apply flex items-center py-2;
  }
</style>

