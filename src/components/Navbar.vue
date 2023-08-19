<template>
  <nav class="navbar fixed-top shadow-sm bg-light navbar-expand-sm">
    <div class="container">
      <!--<img :src="logo" alt="Avatar Logo" style="width:40px;" class="rounded-pill bg-light">-->
      <h1>JSDocs</h1>
      <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#off-canvas">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <div class="offcanvas offcanvas-end offcanvas-lg" id="off-canvas">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas">
        <span class="visually-hidden">close</span>
      </button>
    </div>
    <div class="offcanvas-body">
      <nav-pills :docs="docs"></nav-pills>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'pinia'
  import { docsStore } from '../stores/docs-store'
  import NavPills from '../components/NavPills.vue'
  import logo from '../assets/logo.svg'

  export default {
    name: 'Navbar',
    components: {
      NavPills
    },
    data() {
      return {
        logo: logo
      }
    },
    computed: {
      ...mapState(docsStore, [
        'docs'
      ]),
    },
  }
</script>
