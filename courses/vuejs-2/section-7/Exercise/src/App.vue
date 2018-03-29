<template>
    <div class="container">
        <header-card></header-card>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list></server-list> 
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-detail></server-detail>
            </div>
        </div>
        <hr>
        <footer-card></footer-card>
    </div>
</template>

<script>
import FooterCard from './components/shared/Footer.vue';
import HeaderCard from './components/shared/Header.vue';
import ServerList from './components/server/ServerList.vue';
import ServerDetail from './components/server/ServerDetail.vue';

export default {
  components: {
    FooterCard,
    HeaderCard,
    ServerList,
    ServerDetail
  }
};
</script>

<style>

</style>
