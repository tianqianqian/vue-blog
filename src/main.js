// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import VueAwesomeSwiper from 'vue-awesome-swiper' 
import 'swiper/dist/css/swiper.css'
import Layout from './components/layout/index'

Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			component: Layout
		}
	]
})
const store = new Vuex.Store({
	state: {
		count: 0,
		localCount: 22,
		userInfo: {
			name: 'zhangsan',
			headImg: ''
		},
		todos: [
			{
				id: 1, 
				text: '饮食',
				done: false
			},{
				id: 2,
				text: '看书',
				done: true
			},{
				id: 3,
				text: '喝水',
				done: true
			},{
				id: 4,
				text: '打羽毛球',
				done: false
			}
		]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		// Getter 也可以接受其他 getter 作为第二个参数
		doneTodosCount (state, getters) {
			return getters.doneTodos.length
		}
	},
	mutations: { // 
		increment (state, payload) { // 默认第一个参数是state，payload是过载的一个参数对象
			state.count += payload.amount
		}
	}
})
//通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<Layout/>',
  components: {
  	Layout
  }
})
