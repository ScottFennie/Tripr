<template>
  <div class="component">
    <div class="row">
      <div class="col-4">
        <img class="icon-logo pt-2 ps-2" src="../assets/img/circle-logo.png" alt="Tripr Logo" @click="ClosePage()">
      </div>
      <div class="col-8 text-center pt-4">
        <h1>
          Travelers
        </h1>
      </div>
    </div>
    <div class="row">
      <Traveler :v-for="t in travelers" :key="t.id" :traveler="t" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const travelers = computed(() => AppState.travelers)
    return {
      travelers,
      ClosePage() {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-logo{
  height: 100px;
}
</style>
