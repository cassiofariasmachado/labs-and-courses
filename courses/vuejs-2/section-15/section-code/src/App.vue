<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.mail">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <input type="text" v-model="node" class="form-control">
        <br><br>
        <button class="btn bnt-primary" @click="fetch">Get data</button>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users" :key="u.username">
            {{u.username}} - {{u.mail}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      user: {
        username: '',
        mail: ''
      },
      users: [],
      resource: '',
      node: 'data'
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post('data.json', this.user)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      this.resource.saveAlt(this.user);
    },
    fetch() {
      // this.$http
      //   .get()
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     this.users = Object.values(data);
      //   });
      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.users = Object.values(data);
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: 'POST', url: 'alternative.json' },
      getData: { method: 'GET' }
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
};
</script>

<style scoped>
</style>
