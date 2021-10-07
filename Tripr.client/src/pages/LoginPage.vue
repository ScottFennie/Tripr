<template>
  <div class="container-fluid p-0">
    <div class="login">
      <div class="row">
        <div class="col d-flex flex-column align-items-center mb-4 p-0 w-100">
          <img class="logo" src="../assets/img/circle-logo.png" alt="Tripr Logo">
          <h1>
            tripr
          </h1>
        </div>
      </div>
      <div class="row my-2">
        <div class="col d-flex flex-column align-items-center p-0 w-100">
          <button
            class="btn bg-body thread-button mb-4"
            @click="login"
          >
            <h3 class="btn-center bg-light">
              Login
            </h3>
          </button>

          <button
            class="btn bg-body thread-button"
          >
            <router-link :to="{ name: 'About' }" class="">
              <h4 class="btn-center bg-light">
                About
              </h4>
            </router-link>
          </button>
        </div>
      </div>
    </div>

    <footer>
      <div class="bg-grey text-light text-center px-4">
        <p class="py-1">
          Application Created by Nathan, Quinn, Scott, Drew, Jackson 2021
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
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
  border: 3px dashed #f2f2f2;
  border-radius: 10px;
  padding: .25rem;
}
.btn-center {
  padding: .25rem .25rem;
  border-radius: 10px;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.25);
}
.login{
  margin-top: 20vh;
}
footer{
  position: absolute;
  width: 100vw;
}
</style>
