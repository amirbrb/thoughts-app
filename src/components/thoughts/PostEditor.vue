<template>
  <div class="post-editor">
    <div class="editor-wrapper header-margin">
      <input v-model="title" placeHolder="מחשבה חדשה קורית" dir="auto" class="title"/>
      <textarea ref="editor" class="editor" dir="auto" v-model="content" placeholder="..." contenteditable></textarea>
    </div>
    <div class="save-post" @click="postThought" :disabled="disabled">
      <font-awesome-icon icon="check-circle" class="create-post"/>
    </div>
  </div>
</template>

<<script>
export default {
    props: ['postId'],
    computed: {
      disabled () {
        return !this.content || !this.title;
      }
    },
    methods: {
      convertToHtml (text) {
        return text.replace(/\n/g, '<br />')
      },
      convertFromHtml (text) {
        return text.replace(/<br\s*[\/]?>/gi, '\n')
      },
      postThought () {
        if (this.disabled) return;

        if (this.postId){
            this.$store.dispatch('editPost', {
                body: this.convertToHtml(this.content),
                title: this.title,
                postStyle: this.postStyle,
                id: this.postId
            })
        } else {
          debugger;
            this.$store.dispatch('createPost', {
                body: this.convertToHtml(this.content),
                userId: this.$parent.$parent.$parent.userId,
                timeStamp: new Date(),
                title: this.title,
                postStyle: this.postStyle
            })
        }

        this.$router.push({name: 'home'})
      }
    },
    created: function(){
        if (this.postId){
            let post = this.$store.getters.getPostDetails(this.postId)
            this.title = post.data.title;
            this.content = this.convertFromHtml(post.data.body);
            this.postStyle = post.postStyle;
            this.direction = post.postStyle != null && post.postStyle.direction
                ? post.postStyle.direction
                : 'ltr'  
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
        title: this.title || '',
        content: this.body || '',
        postStyle: this.postStyle || {
        }
      }
    }
}
</script>
<style scoped>
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

  .save-post[disabled] > .create-post{
    color: gray;
  }

  .create-post{
    font-size: 44px;
    color: #3cb371;
  }
</style>
