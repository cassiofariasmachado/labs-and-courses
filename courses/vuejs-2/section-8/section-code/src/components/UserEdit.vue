<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ age }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    age: Number
  },
  methods: {
    editAge() {
      this.age = 30;
      //this.$emit('ageWasEdited', this.age);
      // eventBus.$emit('ageWasEdited', this.age);
      eventBus.changeAge(this.age);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
