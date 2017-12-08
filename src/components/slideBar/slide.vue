<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide v-for="slide in swiperSlides">
			I'm Silde {{slide}}
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination">
		</div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
		<div class="swiper-scrollbar" slot="scrollbar"></div>
	</swiper>
</template>
<script type="text/javascript">
	
</script>
<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		data () {
			return {
				swiperOption: {
				         notNextTick: true,
				         autoplay: 3000,
				         prevButton: '.swiper-button-prev',
				         nextButton: '.swiper-button-next',
				         pagination: '.swiper-pagination'
					},
				swiperSlides: [1, 2, 3, 4, 5]
				 }
			},
		mounted() {
		      setInterval(() => {
		        console.log('simulate async data')
		        if (this.swiperSlides.length < 10) {
		          this.swiperSlides.push(this.swiperSlides.length + 1)
		        }
		      }, 3000)
		    }
	}
</script>