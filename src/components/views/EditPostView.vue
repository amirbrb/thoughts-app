<template>
  <div class="post-container">
    <EditThought :postId="this.$route.params.id"></EditThought>
  </div>
</template>
<script>
  import EditThought from '../thoughts/EditThought.vue'
  export default {
    components: {EditThought},
    methods: {},
    props: ['postId'],
    data: function () {
      return {
      }
    }
  }
</script>
<style scoped>
</style>
