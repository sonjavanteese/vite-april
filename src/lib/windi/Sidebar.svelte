<script>
  import BackDrop from "./BackDrop.svelte";
  export let open;
  const toggle = () => {
    open = !open;
  };
</script>

<aside class="fixed inset-y-0 left-0 w-64 z-30 overflow-hidden" class:open>
  <div class="flex flex-col h-full justify-between overflow-x-hidden overflow-y-auto">
    <slot>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quis enim
        itaque voluptatum suscipit voluptatem deserunt explicabo officia
        excepturi eaque ipsa quidem vel exercitationem doloribus, laudantium
        doloremque fugiat consectetur maiores.
      </p>
    </slot>
    <footer class="p-4 text-right">
      <button on:click={toggle} class="btn shadow hover:btn-red">Close</button>
    </footer>
  </div>
</aside>

<BackDrop bind:open />

<header class="fixed top-1 right-2 z-20 bg-white bg-opacity-25 rounded-full">
  <button on:click={() => (open = true)} class="p-3"
    ><i class="gg-menu-grid-o" /></button
  >
</header>

<style>
  aside {
    transform: translateX(-16rem);
    transition: all, 0.5s ease-in-out;
    opacity: 0.5;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.44);
  }
  aside.open {
    opacity: 1;
    transform: translateX(0);
  }
  .gg-menu-grid-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
  }

  .gg-menu-grid-o::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    height: 4px;
    background: currentColor;
    box-shadow: 0 6px 0, 6px 6px 0, 12px 6px 0, 6px 12px 0, 12px 12px 0, 6px 0 0,
      12px 0 0, 0 12px 0;
    border-radius: 22px;
  }
</style>
