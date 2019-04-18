<template>
  <div dir="auto">
    <HeaderNavigation></HeaderNavigation>
    <div class="route-content">
      <router-view></router-view>
    </div>
    <FLoatingMenu v-if="$route.name !=='createPost' && $route.name !=='editPost'" 
      :bottom="menuPosition.bottom" 
      :right="menuPosition.right">
    </FLoatingMenu>
  </div>
</template>

<script>
  import HeaderNavigation from '@/components/partials/HeaderNavigation.vue'
  import FLoatingMenu from '@/components/partials/FLoatingMenu.vue'
  import PageHeader from '@/components/partials/PageHeader.vue'
  import userState from '@/user-state'
  import imageService from '@/mixins/imageService'
  export default {
    name: 'app',
    mixins: [imageService, userState],
    components: {HeaderNavigation, FLoatingMenu, PageHeader},
    methods: {
    },
    data: function () {
      return {
        title: '',
        userId: 777
      }
    },
    mounted: function () {
      this.$router.push({name: 'home', query: {isInitial: true}})
    }
  }
</script>

<style>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css';
  @import '../static/css/site.css';
  @import 'https://fonts.googleapis.com/css?family=Courgette|Indie+Flower|Varela+Round|Open+Sans+Condensed:300"';

  .route-content{
    position: absolute;
    top: 65px;
    z-index: 1;
    overflow: auto;
    padding: 25px;
    width: 100%;
  }

  .view-title{
    position: fixed;
    top: 80px;
  }

  a {
    color: black;
  }
</style>