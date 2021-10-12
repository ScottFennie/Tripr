<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <label for="name" class="sr-only">Name:</label>
      <input type="text"
             class="form-control bg-primary"
             name="name"
             id="name"
             placeholder="Name.."
             v-model="editable.name"
             required
      >
      <label for="picture" class="sr-only">Picture:</label>
      <input type="img url"
             class="form-control bg-primary"
             name="picture"
             id="picture"
             placeholder="Picture.."
             v-model="editable.picture"
             required
      >
    </div>
    <div class="row">
      <div class="col-md-6">
        <button type="submit" class="btn btn-primary mt-3 p-1">
          <i class="text-shadow">
            Update:
          </i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { accountService } from '../services/AccountService.js'
import Pop from '../utils/Pop.js'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editProfile(editable.value)
          Pop.toast('Profile was Edited', 'success')
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-shadow {
  border-radius: 3px;
  padding: .15rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #A28558;
  text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
}
</style>
