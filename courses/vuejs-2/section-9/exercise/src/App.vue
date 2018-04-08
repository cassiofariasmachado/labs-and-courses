<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="select('Blue')">Load Blue Template</button>
                <button class="btn btn-success" @click="select('Green')">Load Green Template</button>
                <button class="btn btn-danger" @click="select('Red')">Load Red Template</button>
                <hr>

                <component :is="selectedComponent">
                    {{ selectedComponent }}
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  components: {
    Blue,
    Green,
    Red
  },
  data() {
    return {
      selectedComponent: 'Blue'
    };
  },
  methods: {
    select(name) {
      this.selectedComponent = name;
    }
  }
};
</script>

<style>

</style>
