<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name" 
                    :age="age"
                    :resetFn="resetName" 
                    @nameWasReset="name = $event"/>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age"
                    @ageWasEdited="age = $event"/>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data() {
    return {
      name: 'Max',
      age: 27
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = 'Ana';
    },
    resetName() {
      this.name = 'Max';
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
