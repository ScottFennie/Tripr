<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center rounded shadow-sm d-flex align-items-center justify-content-center head">
          <h1 class="text-primary head-font t-shad">
            <b>-About Us-</b>
          </h1>
        </div>
      </div>
    </div>
  </header>
  <body class="">
    <div class="mt-4 container-fluid">
      <div class="row">
        <div class="col-12 d-flex flex-row justify-content-center p-0">
          <div>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" class="prof-pic shadow">
          </div>
          <div class="ms-3">
            <h2 class="text-primary me-3 head-font">
              Scott Fennie
            </h2>
            <div class="d-flex justify-content-end me-3">
              <i class=" ps-1 mdi mdi-github f-22 text-primary"></i>
              <i class=" ps-1 mdi mdi-linkedin f-22 text-primary"></i>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4 d-flex flex-row justify-content-center p-0">
          <div class="ms-3">
            <h2 class="text-primary me-3 head-font">
              Nathan Hendricks
            </h2>
            <div class="d-flex justify-content-start me-3">
              <i class=" ps-1 mdi mdi-github f-24 text-primary"></i>
              <i class=" ps-1 mdi mdi-linkedin f-24 text-primary"></i>
            </div>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" class="prof-pic shadow">
          </div>
        </div>
        <div class="col-12 mt-4 d-flex flex-row justify-content-center p-0">
          <div>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" class="prof-pic shadow">
          </div>
          <div class="ms-3">
            <h2 class="text-primary me-3 head-font">
              Drew McReynolds
            </h2>
            <div class="d-flex justify-content-end me-3">
              <i class=" ps-1 mdi mdi-github f-22 text-primary"></i>
              <i class=" ps-1 mdi mdi-linkedin f-22 text-primary"></i>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4 d-flex flex-row justify-content-center p-0">
          <div class="ms-3">
            <h2 class="text-primary me-3 head-font">
              Jackson Schacher
            </h2>
            <div class="d-flex justify-content-start me-3">
              <i class=" ps-1 mdi mdi-github f-22 text-primary"></i>
              <i class=" ps-1 mdi mdi-linkedin f-22 text-primary"></i>
            </div>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" class="prof-pic shadow">
          </div>
        </div>
        <div class="col-12 mt-4 d-flex flex-row justify-content-center">
          <div>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" class="prof-pic shadow">
          </div>
          <div class="ms-3">
            <h2 class="text-primary me-3 head-font">
              Quinn Perri
            </h2>
            <div class="d-flex justify-content-end me-3">
              <i class=" ps-1 mdi mdi-github f-22 text-primary"></i>
              <i class=" ps-1 mdi mdi-linkedin f-22 text-primary"></i>
            </div>
          </div>
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
height: 10vh;
}
.prof-pic{
 border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  height: 13vh;
  width: 13vh;
  border: 7px solid #6D7746;
}
.head-font{
  font-family: museo-slab,serif;
  font-weight: 600;
}
.t-shad{
  text-shadow: 0px 2px 2px rgba(255,255,255,0.05);
  font-size: 28pt;

}

</style>
