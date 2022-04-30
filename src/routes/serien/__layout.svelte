<script>
  import { user } from "$lib/data";
  import { addToast } from "$lib/toast";
  import { goto } from "$app/navigation";
  $: if (!$user) {
    goto("/");
    addToast(
      "Route requires User Authentification",
      "Forbidden",
      "error",
      4500
    );
  }
</script>

{#if $user}
  <slot />
{/if}
