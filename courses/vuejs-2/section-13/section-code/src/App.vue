<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase }}</p>
                <p>{{ text | toLowercase | toUppercase }}</p>
            </div>
            
            <list></list>
        </div>
    </div>
</template>

<script>
import List from './List.vue';
import FruitMixin from './fruitMixin';

export default {
  data() {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(elem => {
        return elem.match(this.filterText);
      });
    }
  },
  components: {
    List
  }
};
</script>

<style>

</style>
