<template>
  <div id="curriculum_content">
    <div class="content_wrap">
      <div class="video_area"></div>
      <div class="video_title_area">
        <p> 아이폰개발 시작하기 / 초보개발자 / 기본 튜토리얼 / 스위..</p>
      </div>
      <div class="video_like_area">
        <div class="icon_content">
          <font-awesome-icon icon="play"/>
          <span>300</span>
        </div>
        <div class="icon_content">
          <font-awesome-icon icon="heart"/>
          <span>1521</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "curriculum-content"
}
</script>

<style lang="scss" scoped>
#curriculum_content {
  margin-top: 30px;
  height: 400px;
  .content_wrap {
    background: #FFFFFF 0 0 no-repeat padding-box;
    border: 1px solid #DFDFDF;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;

    .video_area {
      width: 100%;
      height: 249px;
      background: #484747;
    }

    .video_title_area {
      padding: 30px 0 20px 20px;
      font-size: 1.15rem;

      p {
        padding-bottom: 30px;
        border-bottom: 1px solid #DFDFDF;
      }
    }

    .video_like_area {
      padding: 0 20px 20px 20px;
      color: #B6B6B6;
      display: flex;
      justify-content: flex-start;
      .icon_content{
        margin-right: 15px;
      }
    }
  }
}
</style>
