import Vue from 'vue'
import Router from 'vue-router'
import homeCompontent from '../pages/home'
import memberCompontent from '../pages/member'
import shopcarCompontent from '../pages/shopcar'
import searchCompontent from '../pages/search'
import newsListCompontent from '../pages/newslist'
import newsInfoCompontent from '../pages/newsInfo'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: homeCompontent
        },
        {
            path: '/member',
            component: memberCompontent
        },
        {
            path: '/shopcar',
            component: shopcarCompontent
        },
        {
            path: '/search',
            component: searchCompontent
        }, {
            path: '/home/newsList',
            component: newsListCompontent
        }, {
            path: '/home/newsInfo/:id',
            component: newsInfoCompontent
        }

    ],
    linkActiveClass: 'mui-active'
})