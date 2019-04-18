<template>
  <router-link :to="'/post/' + metaData.id" tag="div">
    <div v-bind:class="{'right-to-left' : metaData.postStyle.direction == 'rtl'}">
      <div class="title">
        <div class="title-text">
          {{metaData.title}}
        </div>
      </div>
      <div class="body" v-html="crop(metaData.body)"></div>
    </div>
  </router-link>
</template>
<script>
  const maxBodyLengthInPreview = 50
  import imageService from '@/mixins/imageService'
  export default {
    mixins: [imageService],
    props: ['metaData'],
    data: function () {
      return {
      }
    },
    computed: {
      direction: function () {
        return this.metaData.postStyle != null && this.metaData.postStyle.direction
          ? this.metaData.postStyle.direction
          : 'rtl'
      }
    },
    methods: {
      crop (text) {
        if (text.length > maxBodyLengthInPreview) {
          return text.substr(0, maxBodyLengthInPreview) + '...'
        }
        return text
      }
    }
  }
</script>
<style scoped>
  .right-to-left{
    text-align: right;
    direction: rtl;
  }

  .title{
    float: left;
    line-height: 25px;
    width: 100%;
  }

  .title-text{
    font-size: 21px;
    padding-left: 5px;
    text-decoration: underline dotted;
  }

  .body{
    line-height: 30px;
  }
</style>
