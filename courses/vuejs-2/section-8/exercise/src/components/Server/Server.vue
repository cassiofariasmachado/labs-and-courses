<template>
     <li class="list-group-item" @click="selectServer">
        Server #{{ server.id }}
    </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    server: Object
  },
  methods: {
    selectServer() {
      eventBus.selectServer(this.server);
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>

