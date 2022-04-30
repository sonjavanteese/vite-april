<script>
	import { fly, slide } from 'svelte/transition';
	import { copyToClipboard } from '../utils/clipboard';
	export let title = '';
	export let content = '';
	let code = JSON.stringify(content, null, 2);
	let isCopied = false;
	let visible = true;
	const toggle = () => {
		visible = !visible;
	};
	const copy = () => {
		copyToClipboard(code).then(() => (isCopied = false));
		isCopied = true;
	};
	const save = () => {
		console.log('save');
	};
</script>

<section {...$$restProps}>
	<section class="flex items-centers relative w-full p-2">
		{#if isCopied}
			<div
				class="flex items-center absolute inset-0 justify-center px-4 z-10 text-blue-600 bg-blue-100 bg-opacity-75 rounded-lg"
			>
				<span transition:fly={{ x: 20 }}>Copied to clipboard</span>
			</div>
		{/if}

		<!-- <button
      on:click={save}
      class="flex w-10 h-10 items-center justify-center shadow"
      title="Save"><i class="gg-enter" /></button
    > -->
		<button
			on:click={copy}
			class="flex w-10 h-10 items-center justify-center shadow"
			title="Copy"
		>
			<i class="gg-copy" />
		</button>

		<button
			on:click={toggle}
			class="flex w-10 h-10 items-center justify-center shadow mr-1"
			title="Code"
		>
			<i class="gg-code" />
		</button>
	</section>

	{#if visible}
		<div transition:slide={{ y: -200 }} class="p-2">
			<textarea id={title} class="form-control" rows="10" placeholder="JSON Obj">
				{code}
			</textarea>
		</div>
	{/if}
</section>

<style>
	@import '../assets/copy.css';
	@import '../assets/code.css';
	/* @import "../../../assets/enter.css"; */
</style>
