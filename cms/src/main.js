import Vue from 'vue'
import App from './App'

// 按需引入mint-ui
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
    // 初始化页面样式
import './styles/common.css'
// 引入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
    // 全局配置请求根路径
Vue.http.options.root = "http://www.lovegf.cn:8899"

// 引入时间格式化文件
import moment from 'moment'
// 配置全局过滤器---时间过滤器
Vue.filter("dateFormat", function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dateStr).format(pattern)
    })
    // 注册全局组件---发表评论组件
import comment from './components/comment'
Vue.component('comment', comment)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),

})