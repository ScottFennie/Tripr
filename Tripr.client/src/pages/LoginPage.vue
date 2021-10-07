<template>
  <button
    class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
    @click="login"
    v-if="!user.isAuthenticated"
  >
    Login
  </button>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Application Created by Nathan, Quinn, Scott, Drew, Jackson 2021
    </div>
  </footer>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
