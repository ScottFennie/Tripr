<template>
  <div class="supplies container-fluid">
    <div class="header row">
      <div>
        <img @click="toTripPage" class="logo selectable" src="../assets/img/circle-logo.png" alt="Tripr Logo">
        <h2>
          Supplies
        </h2>
        <div class="input-group mb-3">
          <input type="text" class="form-control bg-body p-3" placeholder="Add Supply Item.." aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn bg-primary mdi mdi-plus px-3 m-1" type="button" id="button-addon2">
          </button>
        </div>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#cca363" d="M14.3 21.7C13.6 21.9 12.8 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C13.3 2 14.6 2.3 15.8 2.7L14.2 4.3C13.5 4.1 12.8 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C12.4 20 12.9 20 13.3 19.9C13.5 20.6 13.9 21.2 14.3 21.7M7.9 10.1L6.5 11.5L11 16L21 6L19.6 4.6L11 13.2L7.9 10.1M18 14V17H15V19H18V22H20V19H23V17H20V14H18Z" />
        </svg>
      </div>
    </div>
    <div class="need row">
    </div>
    <div class="assigned row">
    </div>
  </div>

  <!-- TODO take a look during hack-a-ton to determine a final choice -->
  <!-- <header>
    <div class="border-top top"></div>
  </header>
  <div class="supplies container-fluid px-0">
    <div class="row">
      <div class="col-4 p-0 ps-3">
        <img class="logo selectable m-2" src="../assets/img/circle-logo.png" alt="Tripr Logo" @click="toTripPage()">
      </div>
      <div class="col-8 p-0 pe-3 d-flex align-items-start justify-content-end text-center mt-2">
        <h1>
          Supplies
        </h1>
        <button title="Add Supplies" class="btn text p-0 px-1 mt-3 " data-bs-toggle="modal" data-bs-target="#supply-modal">
          <i><svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14.3 21.7C13.6 21.9 12.8 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C13.3 2 14.6 2.3 15.8 2.7L14.2 4.3C13.5 4.1 12.8 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C12.4 20 12.9 20 13.3 19.9C13.5 20.6 13.9 21.2 14.3 21.7M7.9 10.1L6.5 11.5L11 16L21 6L19.6 4.6L11 13.2L7.9 10.1M18 14V17H15V19H18V22H20V19H23V17H20V14H18Z" />
          </svg></i>
        </button>
      </div>
    </div>
    <div>
      <h1 class="text-center border-top m-0">
        Need
      </h1>
      <div v-for="s in currentSupplies" :key="s.id" :supply="s" class="row px-2">
        <SuppliesList v-if="!s.isBringing" :key="s.id" :supply="s" />
      </div>
      <h1 class="mt-3 text-center border-top">
        Assigned
      </h1>
      <div v-for="s in currentSupplies" :key="s.id" :supply="s" class="row px-2">
        <SuppliesList v-if="s.isBringing" :key="s.id" :supply="s" />
      </div>
    </div>
  </div>
  <footer>
    <div class="border-bottom"></div>
  </footer>

  <Modal id="supply-modal">
    <template #modal-title>
      <h3>Supplies</h3>
    </template>
    <template #modal-body>
      <SuppliesForm />
    </template>
  </Modal> -->
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { suppliesService } from '../services/SuppliesService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { Supplies } from '../Models/Supplies'
export default {
  props: {
    supply: {
      type: Supplies,
      default: () => new Supplies()
      // required: true
    }
  },
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await suppliesService.getSupplies(route.params.tripId)
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      currentSupplies: computed(() => AppState.currentSupplies),
      async toTripPage() {
        try {
          await suppliesService.gotoTripPage()
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 25vw;
  filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.25));
}
.text{
  font-family: Museo Slab;
  font-style: normal;
  font-weight: normal;
  color: #cca363;
}

.text-center{
  font-family: Museo Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
}

.supplies{
  background-color: #6d7746;
  height: 100vh;
  color: #cca363;
}

.border-top{
  border-color: #b5af98;
  width: vw100;
}

.top{
  border-color: #e7d3b3;
  height: 10px;
}

.border-bottom{
  border-color: #e7d3b3;
  height: 10px;
}
</style>
