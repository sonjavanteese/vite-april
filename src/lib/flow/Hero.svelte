<script>
export let titel = 'Nwp-Studio';
export let sub = '';
export let bg = '';
export let link = null;
export let badge = "nwp-cgn"; 
</script>

<section style="--bg: url({bg});">
    <div class="container px-4 mx-auto">
      <div class="max-w-xl mx-auto text-center">
        <span class="inline-block text-xs py-1 px-3 bg-blue-500 text-white font-semibold rounded-xl">
           {badge}
        </span>
        <h2 class="my-3 text-3xl md:text-4xl text-white font-bold font-heading">
            {titel}
        </h2>
        <p class="text-sm md:text-base text-white">
            {sub}
        </p>
        {#if link}
            <div class="mt-10">
                {@html link}
            </div>
        {/if}
      </div>
    </div>
</section>

<style>
section {
    @apply pt-20 pb-20 bg-blue-600 bg-no-repeat bg-contain bg-right;
    background-image: var(--bg);
}
</style>