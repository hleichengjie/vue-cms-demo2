<template>
  <div id="app">
 
    <mt-header fixed title="vue项目"></mt-header>
		<transition>
			<router-view></router-view>
		</transition>
  
    <nav class="mui-bar mui-bar-tab">
			<router-link 
       class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
					<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-contact" to="/shopcar">			
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" npmhref="#tabbar-with-map" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  padding-top: 40px;
	padding-bottom: 50px;
}
.v-enter{
	transform: translateX(100%);
}
.v-leave-to{
	
	transform: translateX(-100%);
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
	position: absolute
}
</style>
