<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center shadow d-flex align-items-center justify-content-center head">
          <h1 class="text-secondary">
            About Us
          </h1>
        </div>
      </div>
    </div>
  </header>
  <body class="mt-2">
    <div class="mt-4 container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" class="prof-pic">
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss">
.head{
height: 8vh;
}
.prof-pic{
 border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  height: 14vh;
  width: 14vh;
}

</style>
