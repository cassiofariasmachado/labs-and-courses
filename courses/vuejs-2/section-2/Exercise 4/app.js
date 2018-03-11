new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    color: 'yellow',
    boxClass: '',
    isBold: true,
    padding: 10,
    fontWeight: 700,
    progress: 0
  },
  methods: {
    startEffect: function () {
      setInterval(() => {
        if (this.effectClass === 'highlight') {
          this.effectClass = 'shrink';
        } else {
          this.effectClass = 'highlight';
        }
      }, 3000)
    },
    startProgress: function () {
      setInterval(() => {
        if (this.progress <= 100) {
          this.progress += 5;
        }
      }, 3000)
    }
  },
  computed: {
    boxStyles: function () {
      return {
        color: this.color,
        fontWeight: this.fontWeight,
        padding: this.padding + 'px'
      }
    },
    formatedProgress: function () {
      return this.progress.toFixed(2) + '%'
    },
    styleProgress: function () {
      return {
        width: this.progress + '%'
      }
    }
  }
});
