<script>
  import Page from "$lib/windi/Page.svelte";
  import PageHeader from "$lib/windi/PageHeader.svelte";
  import { page } from "$app/stores";
  import { _south_park, appData } from "$lib/data";
  const pid = 1;
  const heading = "South Park";
  let { navi, head } = appData[pid];
</script>

<Page>
  <PageHeader
    titel={head.titel}
    sub={head.sub}
    class="bg-emerald-700 text-white bg-no-repeat bg-contain"
    style="background-image: url({head.bg ? head.bg : ''})"
  >
    <!-- Slot -->
  </PageHeader>
  <section class="container mx-auto px-2">
    <div class="py-4">
      <h4>{heading}</h4>
      <hr>
      <ul class="list-none divide-y">
        {#each navi as { path, name }}
          {#if path !== $page.url.pathname}
            <li>
              <a href={path} class="flex w-full px-2 py-2">{name} List</a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </section>
</Page>
