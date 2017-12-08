<template>
	<div class="article-list-wrapper">
		<div class="article-list-inner">
			<div class="article-list-item" v-for="article in articles">
				<div class="item-thumb">
					<img src="">
				</div>
				<div class="item-body">
					<h4 class="article-title">{{article.title}}</h4>
					<p class="article-desc">{{article.description}}</p>
					<p class="article-meta">
						<span>
							<i class="glyphicon glyphicon-time"></i>
							<span>{{article.ctime}}</span>
						</span>
						<span>
							<i class="glyphicon glyphicon-eye-open"></i>
							<span>{{article.meta.views}}</span>
						</span>
						<span>
							<i class="glyphicon glyphicon-comment"></i>
							<span>{{article.meta.comments}}</span>
						</span>
						<span>
							<i class="glyphicon glyphicon-heart"></i>
							<span>{{article.meta.likes}}</span>
						</span>
						<span>
							<i class="glyphicon glyphicon-th-list"></i>
							<span>Think</span>
						</span>
					</p>
				</div>
			</div>
			<div class="article-more">加载更多</div>
			<div class="article-lastline">已经到底部</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'articleList',
		data () {
			return {
				articles: [
					{
						id: '',
						thumb: '',
						title: '欢喜勇猛，向死而生',
						description: '天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？',
						ctime: '2017/11/17',
						meta: {
							views: 462,
							comments: 0,
							likes: 2,

						},
						category: [
							{ // 分类
								name:''
							}
						],
						tag: [ // 标签
							{
								name: ''
							}
						]
					},
					{
						id: '',
						thumb: '',
						title: '欢喜勇猛，向死而生',
						description: '天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？',
						ctime: '2017/11/17',
						meta: {
							views: 462,
							comments: 0,
							likes: 2,

						},
						category: [
							{ // 分类
								name:''
							}
						],
						tag: [ // 标签
							{
								name: ''
							}
						]
					},
					{
						id: '',
						thumb: '',
						title: '欢喜勇猛，向死而生',
						description: '天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？',
						ctime: '2017/11/17',
						meta: {
							views: 462,
							comments: 0,
							likes: 2,

						},
						category: [
							{ // 分类
								name:''
							}
						],
						tag: [ // 标签
							{
								name: ''
							}
						]
					},
					{
						id: '',
						thumb: '',
						title: '欢喜勇猛，向死而生',
						description: '天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？',
						ctime: '2017/11/17',
						meta: {
							views: 462,
							comments: 0,
							likes: 2,

						},
						category: [
							{ // 分类
								name:''
							}
						],
						tag: [ // 标签
							{
								name: ''
							}
						]
					},
					{
						id: '',
						thumb: '',
						title: '欢喜勇猛，向死而生',
						description: '天空在心，路在脚底，你，梦想去向哪里？去那座写了你名字的山，去那片等了你很久的海，还是去你向往的无边无际，海阔天空？',
						ctime: '2017/11/17',
						meta: {
							views: 462,
							comments: 0,
							likes: 2,

						},
						category: [
							{ // 分类
								name:''
							}
						],
						tag: [ // 标签
							{
								name: ''
							}
						]
					}
				]
			}
		}
	}
</script>
<style type="text/css">
	.article-list-wrapper{
		margin-top: 12px;
	}
	.article-list-item{
		height: 152px;
		padding: 8px;
		background-color: #fff;
		margin-bottom: 12px;
	}
	.article-list-item:after{
		content: "";
		display: block;
		height: 0px;
		clear: both;
	}
	.article-list-item:hover{
		background-color:#ccc;
	}
	.item-thumb{
		width: 192px;
		height: 136px;
		float: left;
		background-color: #eee;
	}
	.item-thumb img:hover{
		transform: translateX(-10px)
	}
	.item-body{
		float: right;
		width: 70%;
		padding-left: 24px;
	}
	.article-title{
		font-size: 18px;
		font-weight: bold;
		color: #666;
		height: 30px;
		line-height: 15px;
		margin: 0px;
	}
	.article-title:hover{
		color: #000;
		transform: translateX(8px);
	}
	.article-desc{
		height: 75px;
		font-size: 14px;
		overflow: hidden;
	}
	.article-meta > span{
		display: inline-block;
		margin-right: 12px;
		color: #666;
	}
	.article-meta > span > span{
		display: inline-block;
		margin-left: 5px;
	}
	.article-more, .article-lastline{
		margin-top: 12px;
		height: 48px;
		line-height: 48px;
		background-color: #fff;
		text-align: center;
	}
	.article-more:hover{
		background-color: #ccc;
	}
</style>