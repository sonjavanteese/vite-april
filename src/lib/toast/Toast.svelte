<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import ImgDanger from './img-danger.svelte';
  import ImgWarn from './img-warn.svelte';
  import ImgSuccess from './img-success.svelte';
  import ImgInfo from './img-info.svelte';
  import ImgTimer from './img-timer.svelte';
  import { fade, fly } from "svelte/transition";
  import { removeToast } from "./toastStore";
  export let toast;


  function removeMyself() {
    removeToast(toast.id);
  }
</script>



<div class="notifier {toast.type} shown" in:fly={{ y: -600, duration: 400 }} out:fade>
	<button class="notifier-close" on:click={removeMyself} aria-label="Cancel Button" type="button">×</button>
		{#if toast.type === 'danger' || toast.type === 'error'}
			<ImgDanger />
		{:else if toast.type === 'warn' || toast.type === 'warning'}
			<ImgWarn />
		{:else if toast.type === 'success' || toast.type === 'ok'}
			<ImgSuccess />
		{:else if toast.type === 'info' || toast.type === 'default'}
		<ImgInfo />
		{:else}
			<ImgTimer />
		{/if}
		<h2 class="notifier-title">
			{@html toast.titel}
		</h2>
		<div class="notifier-body">
			{@html toast.msg}
		</div>
</div>

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
.notifier.shown {
  @apply opacity-100 hover:opacity-100;
  transform: translateX(0);
}

.notifier-close {
  @apply bg-transparent cursor-pointer h-4 text-base opacity-50 p-0 absolute text-center no-underline w-4;
  @apply top-1 right-1 font-semibold outline-0 rounded-full text-gray-800;
  transition: 0.3s ease;
}

.notifier-img {
@apply float-left mr-2 align-middle;
}

.img {
  @apply h-12 w-12;
}


.notifier-title {
  @apply text-lg font-medium mx-0 mt-0 mb-1 p-0;
}

.notifier.info,
.notifier.default {
  @apply border-l-4 border-blue-500;
}
.notifier.success,
.notifier.ok {
  @apply border-l-4 border-emerald-600;
}
.notifier.warn,
.notifier.warning {
  @apply border-l-4 border-amber-400;
}
.notifier.danger,
.notifier.error {
 @apply border-l-4 border-red-600;
}

</style>

