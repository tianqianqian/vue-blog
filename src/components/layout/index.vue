<template>
	<div id="layout">
		<v-header></v-header>
		<div class="layout-container">
			<div class="layout-content">
				<v-nav></v-nav>
				<div class="main-index">
					<slideBar></slideBar>
					<div class="announcement">
						<i class="glyphicon glyphicon-time"></i>
						<span>树叶的一声只是为了根吗？</span>
					</div>
					<article-list></article-list>
				</div>
			</div>
			<div class="layout-aside">
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vHeader from './header'
	import vNav from './nav'
	import slideBar from '../slide'
	import articleList from '../article/articleList'
	export default {
		name: 'layout',
		components: {
			vHeader,
			vNav,
			slideBar,
			articleList
		},
		data () {
			return {

			}
		}
	}
</script>
<style type="text/css">
	body{
		width: 100%;
		height: 100%;
		background-color: #eee;
	}
	.layout-container{
		width: 86%;
		margin: 0 auto;
	}
	.layout-container:after{
		content: "";
		display: block;
		height: 0;
		clear: both;
	}
	.layout-content{
		width: 866px;
		float: left;
	}
	.main-index{
		display: inline-block;
		width: 662px;
		vertical-align: top;
		margin-top: 20px;
	}
	.layout-aside{
		width: 304px;
		float: right;
	}
	.announcement{
		height: 44px;
		line-height: 44px;
		color: #666;
		margin-top: 12px;
		padding-left: 20px;
		background-color: #fff;
		border-radius: 2px;
	}
	.announcement span{
		display: inline-block;
		margin-left: 20px;
	}
</style>