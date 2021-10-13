<template>
  <div class="container-fluid">
    <div class="d-flex row text-center justify-content-center">
      <i @click="goToAccountPage" class="mdi mdi-close f-26 text-primary darken-30 close"></i>
      <div class="col-10 create-trip-title bg-light">
        <h2 class="text-secondary margin-title">
          Create Trip
        </h2>
      </div>
    </div>
    <div class="row">
      <form @submit.prevent="handleSubmit()">
        <div class="form-group justify-content-center align-items-center d-flex flex-column">
          <label for="title" class="visually-hidden">Trip Name:</label>
          <input type="text"
                 class="form-control bg-light create-trip-input"
                 name="title"
                 id="title"
                 placeholder="Road Trip Name.."
                 maxlength="15"
                 v-model="editable.title"
                 required
          >
          <!-- <label for="description" class="sr-only">Trip Description:</label>
      <input type="text"
             class="form-control bg-primary"
             name="description"
             id="descrition"
             placeholder="For Da Boi's"
             v-model="editable.description"
      > -->
          <!-- <label for="location" class="sr-only">Where are you starting:</label>
          <input type="number"
                 class="form-control bg-primary"
                 name="location"
                 id="location"
                 placeholder="For Da Boi's"
                 v-model="editable.location"
          > -->
          <!-- <label for="startDate" class="sr-only">How long is the Trip:</label>
      <input type="date"
             class="form-control bg-primary"
             name="startDate"
             id="startDate"
             placeholder="Start Today"
             v-model="editable.startDate"
      > -->
          <!-- <div class="btn-group">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Large button
            </button>
            <ul class="dropdown-menu">
              ...
            </ul>
          </div> -->
          <div class="justify-content-center d-flex my-4">
            <Map class="map" />
          </div>
          <label for="travelType" class="visually-hidden">Type of Outing:</label>
          <select class="form-select bg-light trip-type align-self-start ms-3"
                  aria-label="travelType"
                  id="travelType"
                  required
                  v-model="editable.travelType"
          >
            <option value="Camping" selected>
              Camping
            </option>
            <option value="Travel">
              Travel
            </option>
            <option value="Party">
              Party
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>
        <div class="btn-group d-flex justify-content-end">
          <button type="submit" class="submit p-0">
            <img class="submit-btn" src="../assets/img/add-btn.png" alt="">
          </button>
        </div>
      </form>
    </div>
    <div class="row justify-content-center">
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import { tripsService } from '../services/TripsService'
import Pop from '../utils/Pop'
import { router } from '../router'
export default {
//   props: {
//     trip: { type: Trip }
//   },
  setup(props) {
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...props.trip }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await tripsService.editTrip(editable.value)
            Pop.toast('Trip has been adjusted', 'success')
          } else {
            await tripsService.createTrip(editable.value)
            Pop.toast('Trip has been Planned', 'success')
            editable.value = {}
          }
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      async goToAccountPage() {
        try {
          router.push({ name: 'Account' })
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-trip-title {
  clip-path: polygon(100% 45%, 100% 75%, 50% 100%, 0 75%, 0 45%);
  height: 15vh;
  border-radius: 10px;
  margin-top: -3vh;
}
.margin-title {
  margin-top: 8vh;
  font-family: museo-slab,serif;
  font-size: 1.75rem;
  font-weight: bold;
}
.close {
  position: absolute;
  right: -45vw;
}
.trip-type {
  width: 40vw;
  height: 6vh;
  border-radius: 10px;
  color: rgba(109, 119, 70, .85);
  font-family: museo-slab,serif;
  font-size: 1.25rem;
}
.map {
  width: 85vw;
}
.create-trip-input {
  height: 3.5rem;
  border-radius: 10px;
  width: 85vw;
  margin-top: 3vh;
  font-size: 1.75rem;
  color: #6d7746;
  font-family: museo-slab,serif;
  -moz-box-shadow:    inset 2px 2px 5px #b5af98;
   -webkit-box-shadow: inset 2px 2px 5px #b5af98;
   box-shadow:         inset 2px 2px 5px #b5af98;
}
.create-trip-input::placeholder {
  color: rgba(109, 119, 70, .35);
}
.submit {
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  border: none;
}
.submit-btn {
  width: 25vw;
}
.container-fluid {
  max-height: 100vh;
}
</style>
