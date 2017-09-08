<template>
	<div id="app">
		<Index></Index>
		<!-- <Setting></Setting> -->
	</div>
</template>

<script>
	var APP_ID = 'apLrGX1xumsj3TROPuj41A6z-gzGzoHsz';
	var APP_KEY = 'pE0K2vCPp01I1DBS4NhcfOFo';
	AV.init({
		appId: APP_ID,
		appKey: APP_KEY
	});
	// chrome.storage.sync.get("lelKey", function(data) {
	// 	if(data.lelKey){
	// 		var APP_KEY = '';
	// 		var APP_ID = '';
	// 		APP_ID = data.lelKey.split('|')[0];
	// 		APP_KEY = data.lelKey.split('|')[1];
	// 	}
	// }) 
	import Index from './index';
	import Setting from './setting';
	export default {
		components:{
			Index,
			Setting
		},
		name: 'app',
		data(){
			return{
				hasKey: false
			}
		},
		mounted(){
		}
	}
</script>

<style>
	#app{
		height: 100%;
	}
</style>
