<template>
  <div class="Supplies container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img class="logo" src="../assets/img/circle-logo.png" alt="Tripr Logo">
      </div>
      <div class="col-md-8 d-flex align-items-start justify-content-end">
        <h1>Supplies</h1>
        <button title="Add Supplies" class="btn" data-bs-toggle="modal" data-bs-target="#supply-modal">
          <i class="mdi mdi-plus f-16"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <h1>Needed:</h1>
      <SuppliesList :key="s.id" v-for="s in supplies" :supply="s" />
    </div>
    <div class="row">
      <h1>Assigned:</h1>
      <!-- inject Assigned list here -->
    </div>
  </div>

  <Modal id="supply-modal">
    <template #modal-title>
      <h3>Supplies</h3>
    </template>
    <template #modal-body>
      <SuppliesForm />
    </template>
  </Modal>
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
