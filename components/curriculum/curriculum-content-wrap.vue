<template>
  <div id="curriculum_content_wrap">
    <curriculum-title></curriculum-title>
    <swiper ref="curriculumSwiper" :options="swiperOption" style="width: 100%;">
      <swiper-slide v-for="data in ddd.length">
        <curriculum-content></curriculum-content>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import curriculumContent from '~/components/curriculum/curriculum-content'
import curriculumTitle from '~/components/curriculum/curriculum-title.vue'

export default {
  name: 'curriculum-content-wrap',
  components: {
    curriculumContent,
    curriculumTitle,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      ddd: [1, 2, 23, 3, 2],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.curriculumSwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>

#curriculum_content_wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  .swiper-button-prev:after, .swiper-button-next:after{
    font-size: 14px;
  }
  .swiper-button-prev,.swiper-button-next{
    background: #484747 0 0 no-repeat padding-box;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 20px;
  }
}
</style>
