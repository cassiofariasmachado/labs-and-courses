<template>
    <div class="form-group row">
        <div class="col-sm-12">
            <label for="email">Full name</label>
        </div>
        <div class="col-xs-12 col-sm-4">
            <input type="text"
                   id="firstName"
                   class="form-control"
                   :value="firstName"
                   @input="changeName(true, $event)">
        </div>
        <div class="col-xs-12 col-sm-8">
            <input type="text"
                   id="lastName"
                   class="form-control"
                   :value="lastName"
                   @input="changeName(false, $event)">
        </div>
    </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    changeName(isFirst, event) {
      let name = '';

      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }

      this.$emit('input', name);
    }
  },
  computed: {
    firstName() {
      return this.value.split(' ')[0];
    },
    lastName() {
      const names = this.value.split(' ');
      return names[names.length - 1];
    }
  }
};
</script>