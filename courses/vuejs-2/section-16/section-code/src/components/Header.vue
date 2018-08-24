<template>
    <ul class="nav nav-pills">
        <router-link 
            v-for="link in links" 
            :key="link.name" 
            :to="link.path" 
            tag="li" 
            active-class="active"
            exact>
          <a>{{link.name}}</a>
        </router-link>
    </ul>
</template>

<script>
export default {
  name: 'header-card',
  data() {
    return {
      links: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'User',
          path: '/user/10'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
