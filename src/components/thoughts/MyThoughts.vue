<template>
  <div>
    <div class="thought-container">
      <ThoughtPreview class="thought" v-for="item in this.$store.getters.myThoughts" 
        :metaData="item" :key="item.id"></ThoughtPreview>
    </div>
  </div>
</template>
<script>
  import ThoughtPreview from './ThoughtPreview.vue'
  export default {
    components: {ThoughtPreview},
    data: function () {
      return {
        dragging: false
      }
    },
    methods: {
      dragStart(which, ev) {
        debugger
        ev.dataTransfer.setData('Text', this.id);
        ev.dataTransfer.dropEffect = 'move'
        this.dragging = true;
      },
      dragEnter(ev) {
        debugger
      },
      dragLeave(ev) {
        debugger
      },
      dragEnd(ev) {
        this.dragging = false;
      },
      dragFinish(to, ev) {
        
      }
    }
  }
</script>
<style scoped>
  .thought{
    border: 1px solid #2F4F4F;
    border-radius: 4px;
    padding: 5px;
    float: left;
    margin-top: 10px;
    margin-left: 8px;
    font-family: 'Varela Round', sans-serif;
    
    min-width: 150px;
    max-width: 95%;
    min-height: 150px;
    max-height: 240px;

    box-shadow: 2px 1px;
  }
  .drag-menu{
    height: 70px;
    width: 100%;
    background: red;
  }
</style>