<template>
  <div class="floating-menu-wrapper" v-bind:style="{bottom: bottom, right: right}" @click="post">
    <div class="menu-circle">
      <font-awesome-icon icon="brain" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'floating-menu',
    props: ['bottom', 'right'],
    components: {
    },
    mounted: function () {
    },
    methods: {
      post: function () {
        this.$router.push({name: 'createPost'})
      }
    }
  }
</script>

<style>
  .floating-menu-wrapper{
    height: 60px;
    line-height: 60px;
    width: 60px;
    background: red;
    position: fixed;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    z-index: 2;
  }
  .menu-circle{
    width: 100%;
    text-align: center;
  }
</style>