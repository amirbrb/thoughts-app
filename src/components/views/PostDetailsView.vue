<template>
  <div class="post-container">
    <ThoughtDetails :postId="this.$route.params.id"></ThoughtDetails>
  </div>
</template>
<script>
  import ThoughtDetails from '../thoughts/ThoughtDetails.vue'
  export default {
    components: {ThoughtDetails},
    methods: {},
    props: ['postId', 'isSelf'],
    data: function () {
      return {
      }
    }
  }
</script>
<style scoped>
</style>
