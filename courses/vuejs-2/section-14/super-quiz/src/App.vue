<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The super quiz</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition name="flip" mode="out-in">
          <component :is="component"
                     :question="question"
                     @answered="handleCorrectAnswer($event)"
                     @nextQuestion="handleNextQuestion"></component>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import Question from './components/Question';
import Result from './components/Result';

const MODE_ADDICTION = 1;
const MODE_SUBTRACTION = 2;

export default {
  name: 'app',
  data() {
    return {
      component: 'question',
      question: {
        response: 0,
        question: 'Ops, an error occurred! :/'
      }
    };
  },
  methods: {
    handleCorrectAnswer(correct) {
      if (correct) {
        this.component = 'result';
      } else {
        alert('Wrong answer, try again!');
      }
    },
    generateQuestion() {
      let firstNumber = this.randomNumber(1, 100);
      let secondNumber = this.randomNumber(1, 100);
      let mode = this.randomNumber(1, 2);

      let response;
      let question;

      switch (mode) {
        case MODE_ADDICTION:
          response = firstNumber + secondNumber;
          question = `What\'s ${firstNumber} + ${secondNumber}?`;
          break;
        case MODE_SUBTRACTION:
          response = firstNumber - secondNumber;
          question = `What\'s ${firstNumber} - ${secondNumber}?`;
          break;
        default:
          response = 0;
          question = 'Ops, an error occurred! :/';
          break;
      }

      let answers = this.generateFakeAnswers(response);

      let indexCorrectAnswer = this.randomNumber(0, 3);

      answers[indexCorrectAnswer] = {
        correct: true,
        response
      };

      this.question = {
        text: question,
        answers
      };
    },
    generateFakeAnswers(response) {
      let answers = [];

      for (let i = 0; i < 4; i++) {
        let responses = answers.map(a => a.response);

        let fakeResponse = this.randomNumber(
          response - 10,
          response + 10,
          responses
        );

        answers.push({ response: fakeResponse });
      }

      return answers;
    },
    randomNumber(min, max, excepts) {
      let randomNumber = Math.round(Math.random() * (max - min)) + min;

      console.log(`Random number: ${randomNumber} Min: ${min} Max: ${max}`);

      if (excepts && excepts.includes(randomNumber)) {
        return this.generateQuestion(min, max, excepts);
      }

      return randomNumber;
    },
    handleNextQuestion() {
      this.generateQuestion();
      this.component = 'question';
    }
  },
  beforeMount() {
    this.generateQuestion();
  },
  components: {
    Question,
    Result
  }
};
</script>

<style scoped>
.flip-enter {
  /* transform: rotateY(0deg); */
}

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {
  /* transform: rotateY(0deg); */
}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
