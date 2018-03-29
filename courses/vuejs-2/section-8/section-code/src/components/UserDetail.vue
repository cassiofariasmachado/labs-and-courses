<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ reverseName() }}</p>
        <p>User age: {{ age }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name (callback)</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    name: {
      type: String,
      default: 'Max'
    },
    age: Number,
    resetFn: Function
  },
  methods: {
    reverseName() {
      return this.name
        .split('')
        .reverse()
        .join('');
    },
    resetName() {
      this.name = 'Max';
      this.$emit('nameWasReset', this.name);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', age => {
      this.age = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
