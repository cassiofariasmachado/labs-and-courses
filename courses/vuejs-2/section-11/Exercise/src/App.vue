<template>
    <div class="container">
        <form>
            <div v-if="!formSubmitted" class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h3>Exercise 1 </h3>
                    <hr>
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <full-name v-model="user.fullName"></full-name>
                    
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input type="text"
                               id="mail"
                               class="form-control"
                               v-model.trim="user.mail">
                    </div>
                    
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                               id="password"
                               class="form-control"
                               v-model.trim="user.password">
                    </div>

                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="storeData">
                            Store data?
                            <input type="checkbox"
                                   id="storeData"
                                   value="storeData" 
                                   v-model="user.storeData"> 
                        </label>
                    </div>
                    

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button  class="btn btn-primary" @click.prevent="submit">Submit!</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        
        <div v-if="formSubmitted" class="row">
            <br>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.fullName }}</p>
                        <p>Mail: {{ user.mail }}</p>
                        <p>Password: {{ user.password }} </p>
                        <p>Store in Database?: {{ user.storeData ? 'Yes' : 'No' }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue';

export default {
  data() {
    return {
      user: {
        fullName: '',
        mail: '',
        password: '',
        storeData: false
      },
      formSubmitted: false
    };
  },
  methods: {
    submit() {
      this.formSubmitted = true;
    }
  },
  components: {
    FullName
  }
};
</script>

<style>

</style>
