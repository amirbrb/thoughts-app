<template>
  <div class="post-container">
    <PostEditor :postId="postId"></PostEditor>
  </div>
</template>

<script>
  import PostEditor from './PostEditor.vue'
  export default {
    components: {PostEditor},
    props: ['postId']
  }
</script>

<style scoped>
  .post-container{
    width: 100%;
  }
</style>