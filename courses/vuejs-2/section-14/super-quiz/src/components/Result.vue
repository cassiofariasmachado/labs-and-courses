<template>
  <div class="alert alert-success text-center">
    <h1>That's Correct!</h1>
    <hr>
    <button class="btn btn-primary"
            @click="handleClick">
      Next question
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('nextQuestion');
    }
  }
};
</script>

<style scoped>
</style>
