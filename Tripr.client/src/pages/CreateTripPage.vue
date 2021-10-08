<template>
  <div class="container-fluid p-0">
    <div class="row justify-content-center">
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="title" class="form-control" id="title" minlength="3" maxlength="15">
        </div>
        <div class="mb-3">
          <label for="location" class="form-label">Location</label>
          <input type="text" class="form-control" id="location">
        </div>
        <select class="form-select" aria-label="Travel type">
          <option selected>
            Select you Travel Type
          </option>
          <option value="Foot">
            Foot
          </option>
          <option value="Road">
            Road
          </option>
          <option value="Camping">
            Camping
          </option>
        </select>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
