<script>
  import { user } from "../../data";
  import logout from "./logout";
  let loading;
  const signOut = () => {
    loading = true;
    logout().then(() => {
      loading = false;
    });
  };
</script>

<div {...$$restProps}>
  <form on:submit|preventDefault class="py-6 px-6 space-y-2">
    <fieldset>
      <label for="t1" class="label"> User </label>
      <input
        type="text"
        id="t1"
        class="input"
        placeholder={$user ? $user.email : ""}
        disabled
      />
    </fieldset>
    <fieldset>
      <label for="t2" class="label"> User Id </label>
      <input
        type="text"
        id="t2"
        placeholder={$user ? $user.id : ""}
        class="input"
        disabled
      />
    </fieldset>
    <div class="pt-3">
      <button
        on:click={signOut}
        type="submit"
        class="w-full text-white bg-red-700 hover:bg-red-800
            focus:outline-none focus:ring-red-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center"
      >
        {loading ? "... loading" : "Logout"}
      </button>
    </div>
  </form>
</div>

<style>
  .label {
    @apply block mb-1 text-xs font-thin text-gray-600;
  }
  .input {
    @apply appearance-none w-full px-4 py-2.5 text-base leading-none bg-white rounded border-gray-200 outline-none focus:outline-none focus:border-gray-400;
  }
  .input[disabled] {
    @apply bg-gray-50 text-gray-700 cursor-not-allowed;
  }
</style>
