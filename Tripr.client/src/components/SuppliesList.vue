<template>
  <div class="Supplies container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card text-center rounded shadow">
          <div class="card-body">
            <p class="card-text">
              {{ supplies.description }}
            </p>
            <p class="card-text">
              {{ supplies.quantity }}
            </p>
          </div>
        </div>
      </div>
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
