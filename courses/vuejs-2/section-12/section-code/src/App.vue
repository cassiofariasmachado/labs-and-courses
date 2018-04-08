<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build-in directives</h1>
                <hr>
                <h2>Build-in directives</h2>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <hr>
                <p v-highlight:background.delayed="'red'">Highlight text</p>
                <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">Highlight text, too</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }

        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>

</style>
