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
    background: rgba(255, 99, 42, 0.8);
    position: fixed;
    right: 20px;
    bottom: 15px;
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