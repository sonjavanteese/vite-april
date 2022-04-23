<script>
  import { flip } from "svelte/animate";
  import Toast from "./Toast.svelte";
  import { toasts } from "./toastStore";
</script>



<!-- on:click={() => {removeToast(toast.id)}} -->

{#if $toasts.length}
<div class="notifier-container">
	<div class="flex flex-col p-2 space-y-2">
		{#each $toasts as toast (toast.id)}
			<span animate:flip >
        <Toast {toast} />
			</span>
		{/each}
	</div>
  </div>
{/if}




<style>
.notifier-container {
  @apply fixed p-1 box-border fixed p-1 box-border;
  z-index: 999;
  top: 4px;
  right: 4px;
  width: 350px;
  max-width: 98%;
  font-family: "Segoe UI", "Tahoma", "Calibri", "Verdana", sans-serif;
  color: #999;
  }
  
  .notifier {
  @apply bg-white rounded-none border-solid border-l-4 box-border mb-3 opacity-100 p-2 relative w-full hover:opacity-100;
  min-height: 62px;
  border-left: 4px solid #95a5a6;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.1), 0 2px 15px 0 rgba(0,0,0,.05);
  transform: translateX(100%);
  transition: all .6s cubic-bezier(0.5, -0.5, 0.3, 1.4), opacity .6s ease;
  }
  
</style>
