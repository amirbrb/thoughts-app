<template>
  <div class="post-container">
    <div class="editor-wrapper header-margin">
      <input v-model="title" placeHolder="מחשבה חדשה קורית" dir="auto" class="title"/>
      <textarea ref="editor" class="editor" dir="auto" v-model="content" placeholder="..." contenteditable></textarea>
    </div>
    <div class="save-post click-button-md" @click="postThought">
      <font-awesome-icon icon="check-circle" class="create-post"/>
    </div>
  </div>
</template>

<script>
  import userState from '@/user-state'
  export default {
    mixins: [userState],
    name: 'createPost',
    components: {},
    methods: {
      convertToHtml (text) {
        return text.replace(/\n/g, '<br />')
      },
      postThought () {
        this.$store.dispatch('createPost', {
          body: this.convertToHtml(this.content),
          userId: this.userId,
          timeStamp: new Date(),
          title: this.title || 'new post',
          postStyle: this.postStyle
        })

        this.$router.push({name: 'home'})
      }
    },
    mounted: function () {
      let self = this
      self.$refs.editor.addEventListener('keydown', () => {
        setTimeout(() => {
          self.$refs.editor.style.height = 'auto'
          self.$refs.editor.style.height = self.$refs.editor.scrollHeight + 'px'
          self.postStyle.direction = window.getComputedStyle(self.$refs.editor, null).getPropertyValue('direction')
        }, 1)
      })
    },
    data: function () {
      return {
        title: '',
        content: '',
        postStyle: {
        }
      }
    }
  }
</script>

<style scoped>
  .post-container{
    width: 100%;
  }

  .editor-wrapper .title{
    width: 100%;
    border: 0;
    height: 24px;
    font-size: 24px;
    padding: 15px; 
    margin-bottom: 10px;
    outline: none;
  }

  .editor-wrapper .editor{
    overflow:hidden;
    width:100%;
    font-size:14px;
    min-height: 150px;
    display:block;
    border: 0;
    outline: none;
  }

  .save-post{
    width: 100%;
    text-align: right;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  .create-post{
    font-size: 44px;
    color: green;
  }
</style>