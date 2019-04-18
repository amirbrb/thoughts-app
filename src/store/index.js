import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
export default new Vuex.Store({
	state: {
		myThoughts: {},
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
			let post = state.myThoughts[postId];

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
			let count = Object.keys(state.myThoughts).length
			post.id = count + 1
			state.myThoughts[post.id] = post
		},
		editPost: (state, post) => {
			state.myThoughts[parseInt(post.id)].title = post.title;
			state.myThoughts[parseInt(post.id)].body = post.body;
			state.myThoughts[parseInt(post.id)].postStyle = post.postStyle;
		},
		deletePost: (state, postId) => {
			delete state.myThoughts[postId];
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
		},
		editPost: ({commit, state}, post) => {
	    	commit('editPost', post)
    		return state.myThoughts
		},
		deletePost: ({commit, state}, postId) => {
	    	commit('deletePost', postId);
		}
	}
})
