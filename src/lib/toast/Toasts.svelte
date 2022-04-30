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
   
</style>
