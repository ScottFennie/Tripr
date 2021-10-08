<template>
  <div class="Supplies container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img class="logo" src="../assets/img/circle-logo.png" alt="Tripr Logo">
      </div>
      <div class="col-md-8 d-flex align-items-start justify-content-end">
        <h1>Supplies</h1>
        <button title="Add Supplies" class="btn">
          <i class="mdi mdi-plus"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <h1>Needed:</h1>
      <!-- inject supplies list here -->
    </div>
    <div class="row">
      <h1>Assigned:</h1>
      <!-- inject Assigned list here -->
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

</style>
