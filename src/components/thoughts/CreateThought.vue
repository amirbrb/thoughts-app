<template>
  <div class="post-container">
    <PostEditor :metaData="{}"></PostEditor>
  </div>
</template>

<script>
  import userState from '@/user-state'
  import PostEditor from './PostEditor.vue'
  export default {
    mixins: [userState],
    name: 'createPost',
    components: {PostEditor}
  }
</script>

<style scoped>
  .post-container{
    width: 100%;
  }
</style>