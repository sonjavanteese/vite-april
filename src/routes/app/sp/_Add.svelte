<script>
	import { addToast } from '../../../lib/toast';
	import Loader from '../../../lib/windi/Loader.svelte';
	import { fetch_south_park_se, supabase } from '../../../lib/data';
	
	let daten = {
		titel: '',
		name: '',
		st: 1,
		ep: 1,
		tags: '',
		assets: null,
	};
	let season = [];
	let isAdd = false;
	let act = 1;
	let min = 1;
	let max = 18;
	let promise;
	let loading;
	const getData = () => {
		loading = true;
		fetch_south_park_se()
			.then((data) => {
				season = data;
				return data;
			})
			.then(() => {
				loading = false;
			});
	};
	const check = async () => {
		loading = true;
		try {
			let { data: south_park, error } = await supabase
				.from('south_park')
				.select('st,ep')
				.eq('st', daten.st)
				.eq('ep', daten.ep);
			if (!south_park.length) {
				isAdd = true;
				addToast('Press Save to Add New Episode', 'Add Item', 'success');
			} else {
				isAdd = false;
				addToast('Episode already Exist', 'Add Item', 'error');
			}
		} catch (error) {
			addToast(JSON.stringify(error), 'Error', 'error');
		} finally {
			loading = false;
		}
	};
	const addData = async (dataEl) => {
		loading = true;
		try {
			const { data, error } = await supabase
				.from('south_park')
				.update({
					titel: dataEl.titel,
					name: dataEl.name,
					st: dataEl.st,
					ep: dataEl.ep,
					tags: dataEl.tags,
					assets: dataEl.assets,
				})
				.eq('id', dataEl.id);
		} catch (err) {
			console.log(err);
		} finally {
			addToast('Data Updated', 'Action', 'success');
			loading = false;
		}
	};

	promise = getData();
</script>


	<section class="container mx-auto px-2">
		<div class="py-4">
			<!-- ep,titel,name,st,tags,id,assets -->
			<div>
				{#await promise}
					<Loader />
				{:then value}
					<h5>Select Season</h5>
					<nav class="flex flex-wrap gap-2 p-2">
						{#each season as { eps, us, de, id, info }}
							<span
								on:click={() => {
									act = id;
									daten.st = id;
									max = eps;
									isAdd = false;
								}}
								class="flex items-center justify-center h-8 w-8 rounded-full shadow cursor-pointer"
								class:bg-blue-200={act === id}
							>
								{id}
							</span>
						{/each}
					</nav>
					<hr class="my-2" />
				{/await}
			</div>

			<div class="mb-1">
				<label for="sw1" class="label">Titel</label>
				<input
					type="text"
					class="form-control"
					id="sw1"
					value={daten.titel}
					placeholder="Titel"
					on:blur={(e) => {
						daten.titel = e.currentTarget.value;
					}}
				/>
				<small class="text-muted sr-only">Episoden Titel</small>
			</div>
			<div class="mb-1">
				<label for="sw2" class="label">Origin Titel</label>
				<input
					type="text"
					class="form-control"
					id="sw2"
					value={daten.name}
					placeholder="Name"
					on:blur={(e) => {
						daten.name = e.currentTarget.value;
					}}
				/>
				<small class="text-muted sr-only">Orginal Titel</small>
			</div>
			<section class="grid grid-cols-2 gap-4 mb-1">
				<div class="">
					<label for="sw3" class="label">Episode</label>
					<input
						type="number"
						class="form-control"
						id="sw3"
						value={daten.ep}
						{min}
						{max}
						placeholder="Episode"
						on:blur={(e) => {
							daten.ep = e.currentTarget.value;
							isAdd = false;
						}}
					/>
					<small class="text-muted sr-only">Episode</small>
				</div>
				<div class="">
					<label for="sw4" class="label">Staffel</label>
					<input
						type="number"
						class="form-control"
						min={1}
						max={24}
						id="sw1"
						value={daten.st}
						placeholder="Staffel"
						readonly
						on:blur={(e) => {
							daten.st = e.currentTarget.value;
							isAdd = false;
						}}
					/>
					<small class="text-muted sr-only">Staffel</small>
				</div>
			</section>
			<div class="mb-1">
				<label for="sw5" class="label">Tags</label>
				<input
					type="text"
					class="form-control"
					id="sw5"
					value={daten.tags}
					placeholder="Tags"
					on:blur={(e) => {
						daten.tags = e.currentTarget.value;
					}}
				/>
				<small class="text-muted sr-only">Tags</small>
			</div>
			<div class="mb-1">
				<label for="sw6" class="label">Data</label>
				<textarea
					class="form-control"
					id="sw6"
					rows="6"
					placeholder="JSON Obj"
					on:blur={(e) => {
						daten.assets = JSON.parse(
							e.currentTarget.value ? e.currentTarget.value : '{}',
						);
					}}
				/>
				<small class="text-muted sr-only">Episoden Titel</small>
			</div>

			<footer class="flex py-2 space-x-2">
				<button
					on:click={check}
					class="flex w-10 h-10 items-center justify-center shadow rounded"
					class:text-red-600={loading}
					title="Check"
				>
					<i class="gg-add" />
				</button>

				<button
					on:click={check}
					class="flex w-10 h-10 items-center justify-center shadow rounded"
					class:text-red-600={loading}
					class:opacity-10={!isAdd}
					class:cursor-not-allowed={!isAdd}
					title="Save"
					disabled={!isAdd}
				>
					<i class="gg-enter" />
				</button>
			</footer>
		</div>
	</section>


<style>
	@import '../../../lib/assets/enter.css';
	@import '../../../lib/assets/add.css';
</style>
