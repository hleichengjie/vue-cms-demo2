<template>
    <div class="new-info">
        <h1 class="news-title">{{newsInfo.title}}</h1>
        <p class="sub-title"><span>发表时间：{{ newsInfo.add_time | dateFormat }}</span><span>点击：{{newsInfo.click}}次</span></p>
        <hr>
        <div v-html="newsInfo.content"></div>
        <comment>
        </comment>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // id:this.$route.params.id
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created() {
        this.getnewsInfo()
    },
    methods: {
        getnewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(res=>{this.newsInfo=res.body.message[0]})
        }
    },
}
</script>
<style lang="less">
.new-info{
    padding: 5px;
    .news-title{
        font-size: 16px;
        margin: 15px 0;
        color: red;
        text-align: center
    }
    .sub-title{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between
    }
}
</style>
