<template>
  <div>
    <div class="thought-container">
      <ThoughtPreview v-for="item in this.$store.getters.myThoughts" :isSelf="false" :metaData="item"></ThoughtPreview>
    </div>
  </div>
</template>
<script>
  import ThoughtPreview from './ThoughtPreview.vue'
  export default {
    components: {ThoughtPreview},
    methods: {}
  }
</script>
<style>
</style>