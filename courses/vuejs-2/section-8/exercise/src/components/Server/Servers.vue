<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="server in servers" :server="server" :key="server.id"/>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

export default {
  components: {
    Server
  },
  data() {
    return {
      servers: [
        { id: 1, status: 'Critical' },
        { id: 2, status: 'Normal' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Critical' }
      ]
    };
  }
};
</script>

<style>

</style>
