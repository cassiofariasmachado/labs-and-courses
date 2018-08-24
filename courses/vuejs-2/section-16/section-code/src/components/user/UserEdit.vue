<template>
    <div>
        <h3>Edit the User</h3>
        
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>

        <div style="height: 700px"></div>
        
        <p id="data">Some extra content</p>
    </div>
</template> 

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    next(this.confirmed || confirm('Are you sure?'));
  }
};
</script>
