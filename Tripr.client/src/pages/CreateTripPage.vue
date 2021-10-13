<template>
  <div class="container-fluid">
    <div class="row bg-body create-trip-title">
      <h2>Create Trip</h2>
    </div>
    <div class="row justify-content-center">
      <CreateTripForm />
    </div>
    <div class="row justify-content-center">
      <Map />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.create-trip-title {
  clip-path: polygon(100% 45%, 100% 75%, 50% 100%, 0 75%, 0 45%);
}
</style>
