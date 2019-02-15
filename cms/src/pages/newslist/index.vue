<template>
    <div class="newslist">
        <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in lists" :key="item.id">
        <router-link :to="'/home/newsInfo/'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                <h1>{{item.title}}</h1>            
                <p class='mui-ellipsis'><span>发表时间：{{ item.add_time | dateFormat }}</span><span>点击：{{item.click}}次</span></p>
            </div>
        </router-link>
    </li>
</ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists:[]
        }
    },
    created() {
        this.getlists()
    },
    methods: {
        getlists(){
            this.$http.get("api/getnewslist").then(res=>{
                this.lists=res.body.message
                console.log(this.lists)

            })
        }
    },
}
</script>
<style lang="less">
.newslist{
    .mui-table-view{
        .mui-table-view-cell{
            .mui-media-body{
                h1{
                    font-size: 14px;
                }
                p{
                    font-size: 12px;
                    color:#226aff;
                }
                .mui-ellipsis{
                    display: flex;
                    justify-content: space-between
                }
            }
            
        }
    }

}
</style>
