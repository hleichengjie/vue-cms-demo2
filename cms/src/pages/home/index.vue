<template>
    <div class="home-component">
        <mt-swipe :auto="4000">    
            <mt-swipe-item v-for="(item, index) in banner" :key="index">
                <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="@/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="@/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="@/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="@/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="@/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="@/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
    .home-component{
        .mint-swipe{
            height:200px;
            .mint-swipe-item{             
                img{
                    width:100%;
                    height:100%;
                }              
            }
        }
        .mui-table-view{
            background-color: #fff;
            .mui-table-view-cell{
                border: none;
                img{
                    width:80%;
                    height:80%;
                } 
                .mui-media-body{
                    font-size: 14px;
                }
            }
             
        }
    }
</style>
<script>
export default {
    data() {
        return {
            banner:[],

        }
    },
    created() {
        this.getBanner()
    },
    methods: {
        getBanner(){
            this.$http.get("api/getlunbo").then(res=>{
                // console.log(res)
                this.banner=res.body.message
            })
        }
    },
}
</script>
