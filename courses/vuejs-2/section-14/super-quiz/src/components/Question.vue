<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title text-center">{{ question.text }}</h3>
    </div>
    <div class="panel-body">
      <div class="col-xs-12 col-sm-6 text-center" v-for="(answer, index) in question.answers"
                  :key="index"
                  :answer="answer">
            <button class="btn btn-primary btn-lg" @click="handleClick(answer)">{{ answer.response }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      text: String,
      answers: Array
    }
  },
  methods: {
    handleClick(answer) {
      this.$emit('answered', answer.correct);
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 10px;
}
</style>
