<template>
	<div class="carrousel">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="item in slideData">
				<div class="content">
					<img :src="item.img">
					<span class="title">{{item.title}}</span>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'slide',
		components:{
			swiper,
			swiperSlide
		},
		data () {
			return {
				slideData: [
					{
						img: require('../assets/1.jpg'),
						href: '',
						title: '欢喜勇猛，向死而生'
					},
					{
						img: require('../assets/4.jpg'),
						href: '',
						title: '大前端开发者需要了解基础编译原理和语言知识'
					},
					{
						img: require('../assets/2.jpg'),
						href: '',
						title: '一张通往计算机世界的地图'
					},
					{
						img: require('../assets/3.jpg'),
						href: '',
						title: '为什么我们要对这个世界有慈悲心'
					}
				],
				swiperOption: {
				         autoplay: {
				           delay: 3500,
				           disableOnInteraction: false
				         },
				         pagination: {
				           clickable: true,
				           el: '.swiper-pagination'
				         },
				         setWrapperSize: true,
				         autoHeight: true,
				         mousewheel: true,
				         observeParents: true,
				         grabCursor: true,
				         preloadImages: true,
				         lazy: true,
				         onSlideChangeEnd: swiper => {  
				                                 //这个位置放swiper的回调方法  
				                                 this.page = swiper.realIndex+1;  
				                                 this.index = swiper.realIndex;  
				                             } 
				       }
			}
		},
		computed: {
			swiper () {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted () {
			this.swiper.slideTo(0, 0, false)
		}
	}
</script>
<style type="text/css">
	.carrousel{
		overflow: hidden;
	}
	.swiper-container{
		height: 300px !important;
	}
	.content{
		position: relative;
	}
	.title{
		display: block;
		position: absolute;
		top: 16px;
		right: 20px;
		background-color: rgba(255, 255, 255, 0.6);
		font-size: 16px;
		font-weight: 700;
		color: #666;
		padding: 8px;
	}
	.title:hover{
		color: #000;
	}
	.content img:hover{
		animation: imgRotate 1s ease-out;
		transform: rotate(5deg) scale(1.1);
	}
	@keyframes imgRotate {
		0% {
			transform: rotate(0deg) scale(1);
		}
		100% {
			transform: rotate(5deg) scale(1.1);
		}
	}
</style>