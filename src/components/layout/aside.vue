<template>
	<div class="aside-wrapper">
		<div class="aside-search">
			<div class="search-box">
				<input type="search" placeholder="请输入关键词..."/>
				<button class="serach-btn"><i></i></button>
				<router-link to="/" class="sitemap-btn">
					<i class=""></i>
					</router-link>		
			</div>
		</div>
		<div class="aside-article">
			<p class="aside-article-title">
				<i></i>
				<span>热门文章</span>
			</p>
			<ul class="aside-article-list">
				<li class="item" v-for="(item, index) in articles">
					<span>{{index}}</span>
					<router-link class="title" :title="`${item.title} - [ ${item.meta. comments} 条评论]`" to="/">
						<span>{{item.title}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="aside-calendar">
			<calendar></calendar>
		</div>
		<div class="aside-fixed-box">
			<div class="aside-tag">
				<ul>
					<router-link tag="li" class="item" v-for="(item, index) in tags">
						<a class="title" :title="item.description">
							<i class="iconfont" :class=""></i>
							<span>&nbsp;</span>
							<span>{{item.name}}</span>
							<span>{{item.count || 0 }}</span>
						</a>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>