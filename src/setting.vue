<!-- 绑定appid -->
<template>
	<div class="index">
		<h1>绑定AppID和AppKey</h1>
		<div class="main">
			<div class="item">
				<input type="text" placeholder="Your appId" v-model="appId">
			</div>
			<div class="item">
				<input type="text" placeholder="Your appKey" v-model="appKey">
			</div>
			<div class="item">
				<button @click="submit">提交</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	var AV = require('leancloud-storage');
	export default {
		name: 'index',
		data () {
			return {
				appId:'',
				appKey:''
			}
		},
		mounted(){
		},
		methods:{
			submit(){
				if(!this.appId || !this.appKey){
					alert('appId或appKey不能为空！');
					return;
				}
				// chrome.storage.sync.set({'lelKey': this.appId +'|' + this.appKey},function(){alert("设置成功！");
				// 	chrome.tabs.close();})
			}
		}
	}
</script>

<style scoped>
	.index{
		width: 1000px;
		margin: 0 auto;
		padding: 20px;
		overflow: hidden;
	}
	h1{
		text-align: center;
	}
	.main{
		border: 1px solid #ddd;
		width: 400px;
		height: 200px;
		margin: 0 auto;
		margin-top: 30px;
		border-radius: 10px;
		padding-top: 20px;
		background: #fff;
	}
	.item{
		text-align: center;
		width: 100%;
		padding: 10px 0;
	}
	input{
		width: 80%;
		height: 30px;
		border: 1px solid #2d8cf0;
		padding: 0 10px;
	}
	input:focus{
		outline: none;
	}
	button{
		width: 100px;
		padding: 5px 10px;
		background: #2d8cf0;
		border: 1px solid #ddd;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
	}
	button:focus,
	button:hover{
		outline: none;
		opacity: .8;
	}
</style>
