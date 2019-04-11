<template>
  <div class="page-header">
    <h3>{{title}}</h3>
  </div>
</template>
<script>
  export default {
    methods: {
      getRouteTitle: function () {
        return this.routingMap[this.$route.name]
      }
    },
    mounted: function () {
      let self = this
      self.$router.options.routes.map((route) => {
        self.routingMap[route.name] = route.title
      })
      self.title = self.getRouteTitle()
    },
    watch: {
      $route (to, from) {
        this.title = this.getRouteTitle()
      }
    },
    data: function () {
      return {
        title: '404 :-)',
        routingMap: []
      }
    }
  }
</script>
<style scoped>
  .page-header{
  	padding: 15px;
  	background: white;
    z-index: 2;
    width: 100%;
  }

  .page-header h3{
    font-family: 'Indie Flower', cursive;
    text-decoration: underline;
  }
</style>
