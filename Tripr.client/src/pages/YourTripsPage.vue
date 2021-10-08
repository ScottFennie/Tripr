<template>
  <div class="container-fluid bg-primary">
    <div class="row">
      <div class="d-flex justify-content-end">
        <h1 class="selectable t-shad2">
          x
        </h1>
      </div>
      <div class="col-12 d-flex justify-content-center align-items-center head-height">
        <div class="text-shadow2 t-shad2 d-flex justify-content-center align-items-center">
          <h1 class="">
            Trips
          </h1>
        </div>
      </div>
      <div class="col-12 mt-4 d-flex justify-content-center">
        <div class="trip-card shadow d-flex justify-content-between align-items-center">
          <div>
            <h2 class="d-flex align-items-center">
              Trip Name
            </h2>
          </div>
          <div>
            <p class="d-flex align-items-center body-color m-0">
              Date
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.text-shadow2 {
  border-radius: 10px;
  padding: 1rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #CCA363;
  background-color: #E7DEBE;
    text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
    width: 50vw;
    height: 7vh;
}
.trip-card {
  border-radius: 10px;
  padding: .5rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #A28558;
  background-color: #CCA363;
    text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
    width: 75vw;
    height: 7vh;
}

.head-height{
    height: 5vh;
}
.body-color{
    color: #E7DEBE;
}

.t-shad2{

  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
}
</style>
