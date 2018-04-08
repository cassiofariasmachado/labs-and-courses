<template>
    <div class="container">
        <header-card></header-card>
        <hr>
        <div class="row">
            <servers></servers>
            <server-details :server="server"></server-details>
        </div>
        <hr>
        <footer-card></footer-card>
    </div>
</template>

<script>
import HeaderCard from './components/Shared/Header.vue';
import FooterCard from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';
import { eventBus } from './main';

export default {
  components: {
    HeaderCard,
    FooterCard,
    Servers,
    ServerDetails
  },
  data() {
    return {
      server: null
    };
  },
  created() {
    eventBus.$on('serverWasSelected', server => {
      this.server = server;
    });
  }
};
</script>

<style>

</style>
