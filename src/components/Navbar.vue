<template>
  <div>
    <b-navbar type="dark" variant="info" fixed="bottom">
      <b-navbar-brand href="#" class="logo"><img src="/images/logo.png" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#/"><b-icon-house></b-icon-house><p class="d-none d-sm-block">Home</p></b-nav-item>
          <b-nav-item href="/#/reservation"><b-icon-calendar3></b-icon-calendar3><p class="d-none d-sm-block">Reservation</p></b-nav-item>
          <b-nav-item href="/#/status"><b-icon-person></b-icon-person><p class="d-none d-sm-block">Status</p></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Narbar'
}
</script>

<style scoped>
.logo img {
    width: 64px;
}

#nav-collapse p {
  margin: 0;
}

.navbar-nav {
  width: 100%;
}

.navbar-nav li {
  width: 33.3%;
}
</style>