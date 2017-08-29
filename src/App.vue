<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	var AV = require('leancloud-storage');
	var APP_ID = '{{your appId}}';
	var APP_KEY = '{{your appKey}}';
	AV.init({
		appId: APP_ID,
		appKey: APP_KEY
	});
	export default {
		name: 'app'
	}
</script>

<style>
</style>
