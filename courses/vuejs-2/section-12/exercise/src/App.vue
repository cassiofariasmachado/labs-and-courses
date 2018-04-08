<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-listen:click="printEvent">Button</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    listen: {
      bind(el, binding, vnode) {
        const event = binding.arg;

        if (typeof binding.value !== 'function') {
          throw 'Value is not a function!';
        }

        el.addEventListener(event, binding.value);
      }
    }
  },
  methods: {
    printEvent(e) {
      console.log(e);
    }
  }
};
</script>

<style>

</style>
