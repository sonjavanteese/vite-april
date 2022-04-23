<script>
  import { supabase } from '../db'
  import {addToast} from '../toast'
  export let close
  let email, password, loading

  const login = () => {
    loading = true
    supabase.auth
      .signIn({ email, password })
      .then((data) => {
        if (data.error) {
          console.log(data.error)
          addToast(data.error.message, "Authentification Failed", "error")
        } else {
          addToast(`Signed In as ${data.user.email}`, "Authentification", "success")
        }
        
      })
      .then(() => {
        loading = false
      })
      .then(close)
      .catch((err) => {
        addToast(err, "Error", "error")
        // alert(err)
      })
  }
</script>

<div class="w-full shadow rounded-lg bg-white">
  <form on:submit|preventDefault={login} class="py-6 px-6 space-y-2">
        <fieldset>
          <label for="email" class="block mb-1 text-xs font-thin text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="input"
            placeholder="email"
            required />
        </fieldset>
        <fieldset>
          <label
          class="block mb-1 text-xs font-thin text-gray-600"
            for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            bind:value={password}
            placeholder="••••••"
            class="input"
            required />
        </fieldset>
        <div class="py-3">
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center">
            {loading ? '... loading' : 'Login'}
          </button>
        </div>
      </form>
</div>
