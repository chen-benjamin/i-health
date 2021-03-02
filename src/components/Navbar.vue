<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="bottom">
      <b-navbar-brand href="#" class="logo"><img src="/images/logo.png" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#/">Home</b-nav-item>
          <b-nav-item href="/#/demo">Demo</b-nav-item>
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
</style>