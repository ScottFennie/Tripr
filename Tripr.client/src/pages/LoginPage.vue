<template>
  <div class="container-fluid px-0 m-0 mt-5">
    <div class="login px-0 m-0 mt-5">
      <div class="row p-0 m-0 mt-5">
        <div class="col d-flex flex-column align-items-center m-0 mt-5 my-4 p-0 w-100">
          <img class="logo mt-5" src="../assets/img/circle-logo.png" alt="Tripr Logo">
          <h1>
            tripr
          </h1>
        </div>
      </div>
      <div class="row  m-0 my-2 p-0">
        <div class="col d-flex flex-column align-items-center  m-0 p-0 w-100">
          <button
            class="btn bg-body thread-button mb-4"
            @click="login"
          >
            <h3 class="btn-center bg-light p-0">
              Login
            </h3>
          </button>

          <button
            class="btn bg-body thread-button"
          >
            <router-link :to="{ name: 'About' }" class=" p-0">
              <h4 class="btn-center bg-light">
                About
              </h4>
            </router-link>
          </button>
        </div>
      </div>
    </div>

    <footer class="m-0 p-0">
      <div class="row m-0 p-0">
        <div class="col p-0">
          <div class="bg-grey text-light text-center p-0">
            <p class="py-1 mb-0">
              Application Created by Nathan, Quinn, Scott, Drew, Jackson 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { router } from '../router'
import { tripsService } from '../services/TripsService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        // AuthService.loginWithPopup()
        router.push({ name: 'Account' })
        await tripsService.getAllTrips()
      }
    }
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: .75rem;
}
.logo {
  width: 45vw;
  filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.25));
}
h1,h2 {
  font-family: museo-slab,serif;
  font-size: 3.5rem;
  font-weight: 600;
  font-style: normal;
  color: #6d7746;
}
h3 {
  font-family: museo-slab,serif;
  font-size: 2rem;
  font-weight: 300;
  color: #6d7746;
  margin-bottom: 0;
}
h4 {
  font-family: museo-slab,serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(109, 119, 70, .5);
  margin-bottom: 0;
}
.thread-button {
  width: 40%;
  border: 2px dashed #f2f2f2;
  border-radius: 10px;
  padding: .25rem;
}
.btn-center {
  padding: .25rem .25rem;
  border-radius: 5px;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.25);
}
.login{
  margin-top: 20vh;
}
footer{
  position: absolute;
  width: 100vw;
  bottom: 0;
}
</style>
