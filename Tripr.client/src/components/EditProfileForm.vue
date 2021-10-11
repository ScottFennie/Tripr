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
    <button type="submit" class="btn">
      <i class="mdi mdi-plus" />
    </button>
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

</style>
