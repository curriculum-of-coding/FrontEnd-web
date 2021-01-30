<template>
	<div id="curriculum_content_wrap">
		<curriculum-title :curriculumMaker="curriculumMakerArray" />
		<swiper ref="curriculumSwiper" :options="swiperOption" style="width: 100%;">
			<swiper-slide
				v-for="curriculumContent in curriculumContentArray"
				:key="curriculumContent.key"
			>
				<curriculum-content
					:curriculum-content-title="curriculumContent.title"
					:curriculum-content-link="curriculumContent.youtubeLink"
					:curriculum-content-like="curriculumContent.like"
					:curriculum-content-view="curriculumContent.view"
				></curriculum-content>
			</swiper-slide>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import curriculumContent from '~/components/curriculum/curriculum-content';
import curriculumTitle from '~/components/curriculum/curriculum-title.vue';

const apiKey = 'AIzaSyCSwD1idrOA_eMaDjeW0Mx4VLolXr-6nHg';

export default {
	name: 'curriculum-content-wrap',
	components: {
		curriculumTitle,
		curriculumContent,
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			curriculumContentArray: [
				//https://img.youtube.com/vi/xPUzK5yyfQQ/maxresdefault.jpg //이미지
				//https://www.youtube.com/embed/{여기만 주소창에서 짜르면됨} //영상
				{
					youtubeLink:
						'https://img.youtube.com/vi/jlEmhQoMMi8/maxresdefault.jpg',
					title: '아이폰개발 시작하기 / 초보개발자 / 기본 튜토리얼 / 스위..',
					view: '2323',
					like: '3232',
					key: 'ad321',
				},
				{
					youtubeLink:
						'https://img.youtube.com/vi/xS8bK9t186s/maxresdefault.jpg',
					title: '이종훈짱',
					view: '2323',
					like: '3232',
					key: 'ad32311',
				},
				{
					youtubeLink:
						'https://img.youtube.com/vi/xPUzK5yyfQQ/maxresdefault.jpg',
					title: 'dddd',
					view: '2323',
					like: '3232',
					key: '4f2sa1',
				},
			],
			curriculumMakerArray: [
				{ userName: '마루', like: 4432, hate: 323, field: 'BE' },
			],
			swiperOption: {
				slidesPerView: 4,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				Observer: true,
				ObserveParents: true,
			},
		};
	},
	computed: {
		swiper() {
			return this.$refs.curriculumSwiper.$swiper;
		},
	},
};
</script>

<style lang="scss" scoped>
#curriculum_content_wrap {
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-direction: column;

	.swiper-button-prev:after,
	.swiper-button-next:after {
		font-size: 14px;
	}

	.swiper-slide {
		opacity: 0.2;
		transition: 0.5s all ease;
	}

	.swiper-slide.swiper-slide-next.swiper-slide-prev {
		opacity: 0.5;
		transition: 0.5s all ease;
	}

	.swiper-slide.swiper-slide-active {
		opacity: 1;
		transition: 0.5s all ease;
	}

	.swiper-button-prev,
	.swiper-button-next {
		background: #484747 0 0 no-repeat padding-box;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		color: #ffffff;
		font-size: 20px;
	}
}
</style>
