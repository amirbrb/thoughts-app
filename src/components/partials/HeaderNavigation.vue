<template>
	<div class="header-nav">
		<div class="navigation" @click="$router.back()" v-show="!isInitialPage">
			<font-awesome-icon ref="navigationControl" icon="arrow-left" />
		</div>
		<div class="logo">
			thoughts <!--<img src="static/img/icons/icon.png"/>-->
		</div>
	</div>
</template>

<script>
  import userState from '@/user-state'
  import router from '@/router'
  export default {
    mixins: [userState],
    data: function () {
      return {
        isInitialPage: false
      }
    },
    created: function () {
      let self = this
      if (self.$route.query.isInitial) {
        self.isInitialPage = true
      }
      router.beforeEach((to, from, next) => {
        if (to.query.isInitial) {
          self.isInitialPage = true
        } else {
          self.isInitialPage = false
        }

        next()
      })
    }
  }
</script>

<style scoped>
	.header-nav{
		position: fixed;
		width: 100%;
		height: 80px;
		line-height: 80px;
		font-size: 37px;
		background: rgb(255, 99, 42);
		z-index: 10;
		text-align: center;
		font-family: 'Indie Flower', cursive;
		border-bottom: 3px solid rgb(255, 54, 27)
	}

	.navigation{
		width: 50px;
		padding-left: 20px;
		float: left;
		font-size: 20px;
	}

	.logo{
		margin-left: 50px;
		color: 		#2F4F4F;
	}

	.logo img{
		width: 40px;
		height: 40px;
	}

</style>