import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
export default new Vuex.Store({
	state: {
		myThoughts: [],
		counter: 7
	},
  	getters: {
		myThoughts: state => {
			return state.myThoughts
		},
		feed: state => {
			return state.feed
	  	},
		getPostDetails: (state) => (postId) => {
			let post = state.myThoughts.find(post => {
				return post.id == postId
			})

			return {
				data: post,
				postStyle: post.postStyle || {
					direction: 'ltr',
					textAlign: 'left'
				}
			}
		}
	},
	mutations: {
		setPost: (state, post) => {
			let count = state.myThoughts.length
			post.id = count + 1
	    	state.myThoughts[count] = post
		},
  		initialiseStore: (state) => {
			let self = this
  			var storageStore = localStorage.getItem('thinking-store');
  			if(storageStore) {
		  		Object.assign(state, JSON.parse(storageStore))
			}
			state.cc = 7;
  		}
	},
	actions: {
		createPost: ({commit, state}, post) => {
	    	commit('setPost', post)
    		return state.myThoughts
		}
	}
})
