<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="server">
            <h3>Server #{{ server.id }}</h3>
            <p>Status: {{ server.status }}</p>
        </template>
        <p v-else>
            Server not selected
        </p>
    </div>

</template>

<script>
export default {
  props: {
    server: Object
  }
};
</script>

<style>

</style>
