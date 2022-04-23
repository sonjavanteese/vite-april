<script>
  import { supabase } from '../db'
  import { user } from '../stores'
  import {addToast} from '../toast'
  import { sleep } from '../data'
  export let close
  let loading
  const logout = () => {
    loading = true
    sleep(1000).then(() => {
      supabase.auth
      .signOut()
      .then(() => {
        addToast("Successfully Signed Out", "Logged Out", "success")
      })
      .catch((err) => {
        addToast(err, "Error", "error")
        // alert(err)
      })
    })
    .then(() => {
      loading = false
    })
    .then(close)
  }
</script>

<div class="w-full shadow rounded-lg bg-white">
  <form on:submit|preventDefault class="py-6 px-6 space-y-2">
        <fieldset>
          <label for="t1" class="block mb-1 text-xs font-thin text-gray-600">
            User
          </label>
          <input
            type="text"
            id="t1"
            class="input"
            placeholder={$user ? $user.email : ''}
            disabled />
        </fieldset>
        <fieldset>
          <label
            for="t2"
            class="block mb-1 text-xs font-thin text-gray-600">
            User Id
          </label>
          <input
            type="text"
            id="t2"
            placeholder={$user ? $user.id : ''}
            class="input"
            disabled />
        </fieldset>
        <div class="pt-3">
          <button
            on:click={logout}
            type="submit"
            class="w-full text-white bg-red-700 hover:bg-red-800
            focus:outline-none focus:ring-red-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center">
            {loading ? '... loading' : 'Logout'}
          </button>
        </div>
      </form>
</div>
