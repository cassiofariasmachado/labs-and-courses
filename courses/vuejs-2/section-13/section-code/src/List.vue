<template>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>

        <button @click="fruits.push('Lemon')">Add item</button>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';

export default {
  mixins: [fruitMixin],
  created() {
    console.log('Inside list created event');
  }
};
</script>

<style>

</style>
