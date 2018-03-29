<template>
    <div>
        New
        <button @click="counter++">Count</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log('New destroided!');
  },
  deactivated() {
    console.log('Deactivated!');
  },
  activated() {
    console.log('Activated!');
  }
};
</script>

<style scoped>

</style>
