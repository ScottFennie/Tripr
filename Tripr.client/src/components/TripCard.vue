<template>
  <div class="col-12 mt-4 d-flex justify-content-center">
    <div class="trip-card shadow-sm d-flex justify-content-between align-items-center">
      <div>
        <h3 class="d-flex align-items-center">
          {{ trip.title }}
        </h3>
      </div>
      <div>
        <p class="d-flex align-items-center body-color m-0">
          {{ new Date(trip.startDate).toDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trip: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>

</style>
