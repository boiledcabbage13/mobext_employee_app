import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  	mode: 'history',
  	base: process.env.BASE_URL,
	routes: [
		{ path: '/login', name: 'login', component: () => import('./views/pages/LoginPage.vue') },
		{ path: '/', name: 'testing', component: () => import('./views/MainPage.vue'), redirect: '/home', children: [
			{ path: '/home', name: 'newsfeed', component: () => import('./views/pages/NewsFeedPage.vue') },
			{ path: '/search', name: 'search', component: () => import('./views/pages/SearchPage.vue') },
			{ path: '/rewards', name: 'rewards', component: () => import('./views/pages/RewardsPage.vue') },
			{ path: '/profile', name: 'profile', component: () => import('./views/pages/ProfilePage.vue') },
		] },

	]
})
