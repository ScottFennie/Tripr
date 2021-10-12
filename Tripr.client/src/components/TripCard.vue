<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button ps-1 bg-primary collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#flush-' + trip.id"
              aria-expanded="false"
              :aria-controls="'flush-' + trip.id"
      >
        <div class="col-12 d-flex justify-content-center">
          <div class="trip-card align-items-center">
            <div class="trip-border-2 d-flex justify-content-between">
              <h6 class="d-flex align-items-center">
                {{ trip.title }}
              </h6>
              <div class="d-flex align-items-center">
                <p class="body-color m-0">
                  {{ new Date(trip.startDate).toDateString() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </h2>
    <div :id="'flush-' + trip.id" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <Map />
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

<style lang="scss" scoped>
.trip-card {
  box-shadow: 3px 3px 5px #A28558;
}
.trip-border-2 {
  border: 2px dashed #e7debe;
  padding: .5vh 5vw;
  border-radius: 10px;
}
h6 {
  font-weight: 600;
}
p {
  font-size: .85rem;
}
</style>
