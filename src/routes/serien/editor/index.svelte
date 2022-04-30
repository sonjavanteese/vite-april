<script>
  import Page from "$lib/windi/Page.svelte";
  import PageHeader from "$lib/windi/PageHeader.svelte";
  import PopModal from "$lib/windi/PopModal.svelte";
  import { page } from "$app/stores";
  import EditBar from "$lib/windi/EditBar.svelte";
  import { fetch_south_park, _south_park, pageData, appData } from "$lib/data";
  import SpFetcher from "$lib/data/comp/SpFetcher.svelte";
  const pid = 4;
  let {
    navi,
    head
  } = appData[pid];
  let { titel, sub } = pageData[pid];
  let open = false;

  let dataDetail = "";
  const getData = (id) => {
    fetch_south_park(id).then((data) => {
      dataDetail = data;
      open = true;
    });
  };
</script>

<PopModal bind:open>
  <div class="w-full text-left">
    <pre class="overflow-auto">{JSON.stringify(dataDetail, null, 2)}</pre>
  </div>
</PopModal>

<Page>
  <PageHeader titel={head.titel} sub={head.sub} class="bg-red-700 text-white">
    <a
      href="/serien"
      on:click|preventDefault={() => _south_park.fetchAll()}
      class="btn shadow">Reload</a
    >
  </PageHeader>

  <section class="container mx-auto px-2">
    <div class="py-4">
      <SpFetcher refresh={false} let:payload>
        <ul class="list-none divide-y">
          {#each payload as data}
            <li>
              <a
                href="/serien/editor/{data.id}"
                class="flex items-center justify-between py-1 px-2 text-lg cursor-pointer"
              >
                <span class="font-semibold">
                  {data.titel}
                </span>
                <span class="text-sm font-thin italic">
                  {data.st <= 9 ? `0${data.st}` : data.st}/ {data.ep <= 9
                    ? `0${data.ep}`
                    : data.ep}
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
