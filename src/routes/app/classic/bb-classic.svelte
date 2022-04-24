<script>
  import Router from "svelte-spa-router";
  import Detail from "./_bdetail.svelte";
  import List from "./_blist.svelte";
  const prefix = "/bb";
  const routes = {
    "/": List,
    "/:id": Detail,
  };
</script>



<Router {routes} {prefix} restoreScrollState={true} />
