<script>
	import PageHeader from '$lib/windi/PageHeader.svelte';
	import Page from '$lib/windi/Page.svelte';
	import PopModal from '$lib/windi/PopModal.svelte';
	import { fetch_south_park, _south_park, pageData, appData } from '$lib/data';
	import SpFetcher from '$lib/data/comp/SpFetcher.svelte';
	const pid = 3;
	let { navi, head } = appData[pid];
	let open = false;
	let dataDetail = '';
	const getData = (id) => {
		fetch_south_park(id).then((data) => {
			dataDetail = data;
			open = true;
		});
	};
	const evenOdd = (n) => {
		if (n % 2 === 0) {
			return true;
		} else {
			return false;
		}
	};
</script>

<PopModal bind:open>
	<div class="w-full text-left">
		<pre class="overflow-auto">{JSON.stringify(dataDetail, null, 2)}</pre>
	</div>
</PopModal>

<Page>
	<PageHeader titel={head.titel} sub={head.sub} class="bg-blue-700 text-white">
		<a href="/serien" on:click|preventDefault={() => _south_park.fetchAll()} class="btn shadow">
			Reload
		</a>
	</PageHeader>

	<section class="container mx-auto px-2">
		<!-- ep,titel,name,st,tags,id,assets -->
		<div class="py-4">
			<SpFetcher refresh={false} let:payload>
				<ul class="list-none divide-y">
					{#each payload as data}
						<li 
						id="row{data.id}"
							class={evenOdd(data.st)
								? 'bg-red-50 text-red-800 rounded-lg'
								: 'bg-blue-50 text-blue-800 rounded-lg'}
						>
							<a
								href="/serien/list/{data.id}"
								class="flex justify-between py-2 px-2 cursor-pointer border-l-12 border-r-4 {evenOdd(
									data.st,
								)
									? 'border-red-600'
									: 'border-blue-600'} rounded-lg"
							>
								<span class="flex flex-col">
									<span class="text-lg font-semibold">
										{data.titel}
									</span>
									<span class="text-base font-light">{data.name}</span>
									<span class="text-sm ">
										Season: {data.st <= 9 ? 0 : ''}{data.st} Episode: {data.ep <=
										9
											? 0
											: ''}{data.ep}
									</span>
								</span>

								<span class="text-sm italic">
									{data.id}
								</span>
							</a>
						</li>
					{:else}
						<li class="text-center">Press The Reload Button</li>
					{/each}
				</ul>
			</SpFetcher>
		</div>
	</section>
</Page>
