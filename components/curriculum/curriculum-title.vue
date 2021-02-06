<template>
  <div id="curriculum_title_wrap">
    <div class="title_content">
      <div class="curriculum_maker_title">
        <span
          class="curriculum_maker_title"
          v-if="curriculumMaker[0].field === 'FE'"
          >현직 Front-end 개발자</span
        >
        <span
          class="curriculum_maker_title"
          v-else-if="curriculumMaker[0].field === 'BE'"
          >현직 Back-end 개발자</span
        >
        <span class="curriculum_maker_title" v-else>현직 Dev-ops 개발자</span>
        <span class="border_title">{{ curriculumMaker[0].userName }}</span>
        님의 커리큘럼
      </div>
      <div class="icon_wrap">
        <font-awesome-icon icon="thumbs-up" class="icon_up_down" />
        <span class="counting">{{ curriculumMaker[0].like }}</span>
        <font-awesome-icon icon="thumbs-down" class="icon_up_down" />
        <span class="counting">{{ curriculumMaker[0].hate }}</span>
      </div>
    </div>
    <div class="link_wrap ">
      <span>{{ curriculumMaker[0].userName }}님의 커리큘럼 보러가기</span>
      <font-awesome-icon icon="chevron-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'curriculum-title',
  props: {
    curriculumMaker: Array,
  },
};
</script>

<style lang="scss" scoped>
#curriculum_title_wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding-right: 50px;

  .title_content {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .curriculum_maker_title {
      font-size: 22px;
      font-weight: 900;

      .border_title {
        color: #f64e5b;
        font-size: 24px;
        border-bottom: 1px solid #f64e5b;
      }
    }
  }

  .icon_wrap {
    margin-left: 10px;

    .counting {
      color: #b6b6b6;
      padding: 0 10px 0 5px;
    }

    .icon_up_down {
      color: #b6b6b6;
      cursor: pointer;
    }
  }

  .link_wrap {
    border: 1px solid #f64e5b;
    border-radius: 20px;
    opacity: 1;
    padding: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f64e5b;

    span {
      cursor: pointer;
      padding-right: 5px;
    }
  }
}
</style>
