<script>
	import Page from '$lib/windi/Page.svelte';
	import PageHeader from '$lib/windi/PageHeader.svelte';
	import Loader from '$lib/windi/Loader.svelte';
	import { Modal, Content, Trigger } from 'sv-popup';
	import EditBar from '$lib/windi/EditBar.svelte';
	import { fetch_south_park, _south_park, sleep, appData } from '$lib/data';
	import { page } from '$app/stores';
	let open = false;
	let daten = {};
	let promise;
	let loading;
	let { head } = appData[3];
	$: heading = daten.titel ? daten.titel : 'Details';
	const getData = () => {
		fetch_south_park({id: $page.params.id})
			.then((data) => {
				daten = data;
			})
			.then(() => {
				sleep(1000);
			})
			.then(() => {
				return daten;
			});
	};

	const reload = () => {
		_south_park.fetchAll();
	};
	promise = getData();
</script>

<!--   <PopModal bind:open>
    <div class="w-full text-left">
      <pre class="overflow-auto">{JSON.stringify(dataDetail, null, 2)}</pre>
    </div>
  </PopModal> -->

<Page>
	<PageHeader titel={head.titel ? head.titel : ''} sub={heading} class="bg-blue-600 text-white" />
	<section class="container mx-auto px-2">
		<div class="py-4">
			{#await promise}
				<Loader />
			{:then value}
				<!-- ep,titel,name,st,tags,id,assets -->

				<dl>
					<dt>Index</dt>
					<dd>{daten.id ? daten.id : ' '}</dd>
					<dt>Titel</dt>
					<dd>{daten.titel ? daten.titel : ' '}</dd>
					<dt>Orginal Titel</dt>
					<dd>{daten.name ? daten.name : ' '}</dd>
					<dt>Season / Episode</dt>
					<dd>
						<span>{daten.st ? daten.st : ' '} /</span>
						<span class="italic text-red-800">{daten.ep ? daten.ep : ' '}</span>
					</dd>
					<dt>Tags</dt>
					<dd>{daten.tags ? daten.tags : 'South Park'}</dd>
				</dl>
				{#if daten.assets && daten.assets.info}
					<blockquote>
						<small class="text-xs leading-2 italic">{daten.assets.info}</small>
					</blockquote>
				{/if}
				{#if daten.assets && daten.assets.img}
					<div class="py-4">
						<img src={daten.assets.img} alt="img" class="h-64" />
					</div>
				{/if}
				<hr />
				<footer class="flex py-2 space-x-2">
					<Modal small={true}>
						<Content>
							<div class="mr-2 mt-2 w-full">
								<EditBar
									class=" bg-white rounded-lg"
									title={daten.titel}
									content={daten}
								/>
							</div>
						</Content>
						<Trigger>
							<button
								class="flex w-10 h-10 items-center justify-center shadow rounded"
							>
								<i class="gg-attachment" />
							</button>
						</Trigger>
					</Modal>
				</footer>
			{:catch error}
				<div>
					<h1 class="text-red-600">Error</h1>
					<pre>{(JSON.stringify(error), null, 2)}</pre>
				</div>
			{/await}
		</div>
	</section>
</Page>

<style>
	@import '../../../assets/enter.css';
	@import '../../../assets/attachment.css';
	dl {
		@apply py-4;
	}
	dt {
		@apply text-xs font-light;
	}
	dd {
		@apply text-2xl font-semibold text-gray-600;
	}
	blockquote {
		@apply pl-6 border-l-8 border-gray-400 text-gray-400 rounded my-2;
	}
</style>
