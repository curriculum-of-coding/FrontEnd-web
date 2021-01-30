<template>
  <div class="curriculum-detail-content">
    <div class="header">
      <div class="writer-profile">
        <div class="writer-icon">

        </div>
        <div>
          <div class="writer-name">
            작성자
          </div>
          <div class="write-date">
            2012.01.16. 21:00
          </div>
        </div>
      </div>
      <div class="back-next-area">
        <div class="button back-button">
          <font-awesome-icon icon="chevron-left"/>
        </div>
        <div class="button next-button">
          <font-awesome-icon icon="chevron-right"/>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="contents-video">
        <iframe width="100%" height="630px" src="https://www.youtube.com/embed/tZooW6PritE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="title">
        <h2>어떤 언어로 시작하는것이 좋을까?</h2>
      </div>
      <div class="contents-description">
        <h3>1. 소개</h3>
        <div>
          이번 강의에서는 개발 언어의 종류와 각각의 장단점에 대해 다룹니다.<br>또한, 언어별 특징에 따른 특화분야와 언어와 관련된 개발자 커리어 FAQ도 진행합니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup () {
    
  }
}
</script>

<style lang="scss" scoped>
  .curriculum-detail-content {
    background-color: white;
    border-radius: 10px;
    padding: {
      top: 60px;
      right: 50px;
      bottom: 63px;
      left: 50px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: {
        bottom: 31px;
      }

      .writer-profile {
        display: inline-flex;
        .writer-icon {
          border-radius: 100%;
          width: 56px;
          height: 56px;
          background-color: #F64E5B;
          margin: {
            right: 20px;
          }
        }
        .writer-name {
          letter-spacing: -1.2px;
          color: #0D0D0D;
          font-size: 24px;
        }
        .write-date {
          font-size: 16px;
          color: #969696;
          letter-spacing: 0px;
          font-weight: normal;
        }
      }
      .back-next-area {
        display: inline-flex;

        .button {
          width: 9px;
          cursor: pointer;
        }
        .back-button {
          margin-right: 25px;
        }
      }
    }
    .contents {
      .title {
        border-bottom-style: solid;
        border-bottom-color: #DFDFDF;
        border-bottom-width: 1px;
        padding: {
          bottom: 30.5px;
        }
        margin: {
          top: 54px;
          bottom: 24.5px;
        }

        & > h2 {
          font-size: 30px;
          font-weight: bold;
          letter-spacing: -1.5px;
          color: #0D0D0D;
        }
      }
      .contents-description {
        & > h3 {
          font-size: 24px;
          font-weight: bold;
          color: #0D0D0D;
          letter-spacing: -1.2px;
          
          margin: {
            bottom: 17px;
          }
        }
        & > div {
          letter-spacing: 0px;
          color: #969696;
          font-size: 16px;
          font-weight: normal;
        }
      }
    }
  }
</style>