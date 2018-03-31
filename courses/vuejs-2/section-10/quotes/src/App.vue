<template>
    <div class="container">
      <header-card :quote-count="quotes.length" :max-quotes="maxQuotes"></header-card>
      <new-quote @quoteCreated="addQuote"></new-quote>
      <quote-grid :quotes="quotes" @quoteDeleted="removeQuote"></quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on a quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import HeaderCard from './components/Header.vue';

export default {
  data: function() {
    return {
      quotes: ['Just a Quote to see something'],
      maxQuotes: 10
    };
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please, delete quotes first!');
      }

      this.quotes.push(quote);
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    QuoteGrid,
    NewQuote,
    HeaderCard
  }
};
</script>

<style>

</style>
