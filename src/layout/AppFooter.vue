<template>
  <footer class="footer">
    <!--<div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
    </div>-->
    <div class="container">
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{year}}
            <a href="." target="_blank" rel="noopener">SVUAG</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a
                target="_blank"
                rel="noopener"
                href="https://twitter.com/creativetim"
                class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <br />
              <!-- Da cambiare -->
            </li>

            <li class="nav-item">
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/creativetimofficial"
                class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
                data-toggle="tooltip"
                data-original-title="Star on Github"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
