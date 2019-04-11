<template>
  <div v-bind:class="{'thought': true, 'right-to-left' : metaData.postStyle.direction == 'rtl'}">
    <router-link :to="'/post/' + metaData.id" tag="div">
      <div class="title">
        <div class="title-text">{{metaData.title}}</div>
        <div class="owner-wrapper">
          <div class="owner" v-if="!isSelf">
            <img :src="this.getAvatar(metaData.userId)"/>
          </div>
        </div>
      </div>
      <div class="body" v-html="crop(metaData.body)"></div>
    </router-link>
  </div>
</template>
<script>
  const maxBodyLengthInPreview = 150
  import imageService from '@/mixins/imageService'
  export default {
    mixins: [imageService],
    props: ['metaData', 'isSelf'],
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


  .thought{
    border: 1px solid #2F4F4F;
    border-radius: 4px;
    padding: 5px;
    float: left;
    margin-top: 10px;
    margin-left: 8px;
    font-family: 'Varela Round', sans-serif;
    max-width: 95%;
    box-shadow: 3px 3px;
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

  .owner-wrapper{
    width: 17%;
    float: right;
  }

  .owner{
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  .owner > img{
    height: 40px;
    width: 40px;
    border-radius: 50px;
    border: 1px solid gray;
  }   

  .body{
    line-height: 30px;
  }
</style>
