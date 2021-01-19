<template>
  <div id="curriculum_title_wrap">
    <div class="title_content">
      <span class="curriculum_maker_title">
        현직 Front-end 개발자
        <span class="border_title">마루</span>
        님의 커리큘럼
      </span>
      <div class="icon_wrap">
        <font-awesome-icon icon="thumbs-up" class="icon_up_down"/>
        <span class="counting">1</span>
        <font-awesome-icon icon="thumbs-down" class="icon_up_down"/>
        <span class="counting">42342</span>
      </div>

    </div>
    <div class="link_wrap ">

    </div>
  </div>
</template>

<script>
export default {
  name: "curriculum-title"
}
</script>

<style lang="scss" scoped>
#curriculum_title_wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-right: 65px;

  .title_content {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .curriculum_maker_title {
      font-size: 22px;
      font-weight: 900;
      .border_title {
        color: #F64E5B;
        font-size: 24px;
        border-bottom: 1px solid #F64E5B;
      }
    }
  }
  .icon_wrap {
    margin-left: 10px;

    .counting {
      color: #B6B6B6;
      padding: 0 10px 0 5px;
    }

    .icon_up_down {
      color: #B6B6B6;
      cursor: pointer;
    }
  }

  .link_wrap {
    border: 1px solid #F64E5B;
    border-radius: 20px;
    opacity: 1;
    width: 250px;
    height: 40px;
  }

}
</style>
