<template>
    <div class="row">
        <quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">
            {{ quote }}
        </quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
  components: {
    Quote
  },
  props: {
    quotes: Array
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index);
    }
  }
};
</script>

<style scoped>
.panel-body {
  font-family: 'Arizonia', cursive;
  font-size: 24px;
  color: #6e6e6e;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>
