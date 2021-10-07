<template>
  <div class="container-fluid bg-secondary account">
    <div
      class="text-primary"
      @click="logout"
    >
      <i class="mdi mdi-logout-variant f-28"></i>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang="scss">
.account {
  height: 100vh;
}
</style>
