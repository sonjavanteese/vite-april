<script>
	import 'virtual:windi.css';
	import '../style.css';
	import { supabase, user, _app, navData } from '$lib/data';
	import Toasts from '$lib/toast/Toasts.svelte';
	import Sidebar from '$lib/windi/Sidebar.svelte';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	user.set(supabase.auth.user());
	if (browser) {
		import('virtual:windi-devtools');
	}
	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') {
			user.set(session.user);
		} else {
			user.set(null);
		}
	});
	let open;
</script>

<Toasts />
<Sidebar bind:open>
	<div class="w-full h-full">
		<ul>
			{#each navData as { path, name, icon, sub }}
				{#if !sub}
					<li on:click={() => (open = false)}>
						<a href={path} class="nav-link" class:active={$page.url.pathname === path}>
							{name}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</Sidebar>

<main id="main">
	{#if browser}
		<slot />
	{/if}
</main>

<style>
	.nav-link {
		@apply flex items-center text-lg font-medium text-gray-600;
	}
	.nav-link.active {
		@apply text-blue-800;
	}
	/* @import url("https://css.gg/notes.css");
  @import url("https://css.gg/menu-grid-o.css");
  @import url("https://css.gg/user.css");
  @import url("https://css.gg/user-add.css");
  @import url("https://css.gg/arrow-left.css"); */
</style>
