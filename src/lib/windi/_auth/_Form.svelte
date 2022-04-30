<script>
  import login from "./login";
  let email, password, loading;
  const signIn = () => {
    loading = true;
    login(email, password).then(() => {
      loading = false;
    });
  };
</script>

<div {...$$restProps}>
  <form on:submit|preventDefault={signIn} class="py-6 px-6 space-y-2">
    <fieldset>
      <label for="email" class="label"> Email </label>
      <input
        type="email"
        id="email"
        bind:value={email}
        class="input"
        placeholder="email@host.com"
        required
      />
    </fieldset>
    <fieldset>
      <label for="password" class="label"> Password </label>
      <input
        type="password"
        id="password"
        bind:value={password}
        placeholder="••••••"
        class="input"
        required
      />
    </fieldset>
    <div class="py-3">
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 text-center"
      >
        {loading ? "... loading" : "Login"}
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
