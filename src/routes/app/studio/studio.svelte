<script>
  import Router from "svelte-spa-router";
  import Detail from "./_sdetail.svelte";
  import List from "./_slist.svelte";
  const prefix = "/studio";
  const routes = {
    "/": List,
    "/:id": Detail,
  };
</script>



<Router {routes} {prefix} restoreScrollState={true} />
