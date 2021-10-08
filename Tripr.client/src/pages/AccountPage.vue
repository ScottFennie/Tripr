<template>
  <div class="container-fluid bg-secondary account">
    <div class="row justify-content-center">
      <div class="mt-4 account-info bg-body">
        <h2 v-if="account">
          {{ account.name }}
        </h2>
        <p>last road trip: <span>{{ account.lastTrip }}</span></p>
        <p>total trips: <span>{{ account.totalTrips }}</span></p>
        <img v-if="account" :src="account.picture" alt="account picture">
      </div>
    </div>
    <div class="row justify-content-center">
      <img class=" cool-button patch mb-5" src="../assets/img/create.png" alt="Create Trip">
      <img class="cool-button patch" src="../assets/img/join.png" alt="Join Trip">
    </div>
    <div class="mt-5 row align-items-end justify-content-between">
      <div class="col-6">
        <button type="button" class="shadow btn bg-primary w-100">
          <router-link :to="{ name: 'YourTrips' }" class="">
            <h2 class="text-shadow">
              Trips
            </h2>
          </router-link>
        </button>
      </div>
      <div class="d-flex col-6 pe-4 justify-content-end">
        <div
          class="text-primary"
          @click="logout"
        >
          <i class="mdi mdi-logout-variant f-30"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  border-radius: 10px;
  padding: .1rem;
}
h2 {
  font-family: museo-slab,serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0;
}
.account {
  height: 100vh;
}
.account-info {
  border-radius: 10px;
  clip-path: polygon(0 0, 100% 0%, 100% 45%, 0 73%);
  width: 90vw;
  height: 35vh;
  margin-bottom: -60px;
}
.patch {
  width: 55vw;
  height: auto;
}
.text-shadow {
  border-radius: 10px;
  padding: .5rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #A28558;
    text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
}
.cool-button{

}
.cool-button:hover{
cursor: pointer;
 transform: scale(1.03);
}

</style>
