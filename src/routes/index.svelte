<script>
	import { user, navData, appData } from '$lib/data';
	import Auth from '$lib/windi/Auth.svelte';
	import Page from '$lib/windi/Page.svelte';
	const pid = 0;
	let { head } = appData[pid];
</script>

<Page>
	<header
		class="py-12 px-4 text-center bg-pink-800 text-white bg-no-repeat bg-contain"
		style="background-image: url({head.bg ? head.bg : ''});"
	>
		<hgroup class="py-4 space-y-4">
			<h2>{head.titel ? head.titel : 'Nwp-Studio'}</h2>
			<h4>
				{#if $user}
					{head.sub ? head.sub : 'Startseite'}
				{:else}
					Signed Out
				{/if}
			</h4>
		</hgroup>
	</header>
	<hr />
	<section class="container mx-auto px-2">
		<div class="py-4">
			<Auth popup class="shadow bg-white rounded-lg w-full">
				<div slot="auth" class="py-8">
					<ul>
						{#each navData as { path, name, icon, sub }, i}
							{#if i != 0 && !sub}
								<li>
									<a href={path}>{name}</a>
								</li>
							{/if}
						{:else}
							<li>... loading</li>
						{/each}
					</ul>
				</div>
			</Auth>
		</div>
	</section>
</Page>
