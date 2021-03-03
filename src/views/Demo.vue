<template>
  <div id="demo">
    <div>
        <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
    </div>
    <h1 v-if="isActive">If statement demo</h1>
    <b-list-group>
      <b-list-group-item v-for="user, index in users" :key="index">{{ user.name }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      isActive: true,
      users: [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
        {id: 3, name: 'c'},
        {id: 4, name: 'd'},
        {id: 5, name: 'e'}
      ]
    }
  }
}
</script>
