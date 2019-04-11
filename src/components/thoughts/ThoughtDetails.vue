<template>
  <div>
    <div v-bind:class="{'thought-container': true, 'right-to-left' : this.direction == 'rtl'}">
      <div class="title">
        <div class="title-text">{{postDetails.data.title}}</div>
        <div class="owner-wrapper"></div>
        <div class="timestamp">{{this.postDetails.data.timeStamp | moment("dddd, MMM Do YYYY")}}</div>
      </div>
      <div class="body" v-html="postDetails.data.body"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['postId', 'isSelf'],
    components: {},
    methods: {},
    created: function () {
      let post = this.$store.getters.getPostDetails(this.postId)
      this.postDetails = post
      this.isReadOnly = post.data.userId !== this.$parent.$parent.userId

      this.direction = this.postDetails.postStyle != null && this.postDetails.postStyle.direction
          ? this.postDetails.postStyle.direction
          : 'ltr'
    },
    data: function () {
      return {
        postDetails: {
        },
        direction: '',
        isReadOnly: false
      }
    }
  }
</script>
<style scoped>
  .right-to-left{
    text-align: right;
    direction: rtl;
  }

  .thought-container{
    width: 100%; 
  }

  .title-text{
    font-size: 21px;
    padding-left: 5px;
    text-decoration: underline dotted;
  }

  .post-meta{
    width: 100%;
  }

  .timestamp{
    width: 100%;
  }

  .owner{
    width: 50px;
    height: 50px;
  }

  
</style>