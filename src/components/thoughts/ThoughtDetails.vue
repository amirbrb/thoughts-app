<template>
  <div v-bind:class="{'thought-container': true, 'right-to-left' : this.direction == 'rtl'}">
    <div class="owner-wrapper">
      <img :src="this.getAvatar(postDetails.userId)"/>
    </div>
    <div class="timestamp">{{this.postDetails.data.timeStamp | moment("HH:mm:ss DD-MM-YYYY")}}</div>
    <div class="title">{{postDetails.data.title}}</div>
    <div class="body" v-html="postDetails.data.body"></div>
    <div class="actions-menu">
      <font-awesome-icon icon="share-alt" @click="sharePost"/>
      <router-link :to="'/post/edit/' + postId" v-if="!isReadOnly">
        <font-awesome-icon icon="edit"
        ></font-awesome-icon>
      </router-link>
      <font-awesome-icon icon="trash" v-if="!isReadOnly" @click="deletePost"/>
    </div>
  </div>
</template>
<script>
  import imageService from '@/mixins/imageService'
  export default {
    mixins: [imageService],
    props: ['postId'],
    components: {},
    methods: {
      sharePost () {

      },
      deletePost () {
        this.$store.dispatch('deletePost', this.postId);
        this.$router.push('/')
      }
    },
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
  .owner-wrapper {
    float: right;
  }

  .right-to-left .owner-wrapper{
    float:left;
  }

  .owner-wrapper img{
    height: 40px;
    width: 40px;
    border-radius: 35px;
  }

  .timestamp{
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  .right-to-left{
    text-align: right;
    direction: rtl;
  }

  .thought-container{
    width: 100%; 
  }

  .title{
    font-size: 21px;
    padding-left: 5px;
    text-decoration: underline dotted;
  }

  .post-meta{
    width: 100%;
  }

  .body{
    padding: 10px;
    height: 70vh;
    overflow-y: auto;
  } 

  .actions-menu{
    position: fixed;
    left: 20px;
    bottom: 10px;
    font-size: 18px;
  }
</style>