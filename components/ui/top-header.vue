<template>
  <div id="header_wrap">
    <dl v-for="headerTitle in headerTitle" class="header_contents" :key="headerTitle">
      <dt>{{menuTitle.name}}</dt>
      <dd>{{menuTitle.subTitle}}</dd>
    </dl>
    <div class="btn_wrap" v-if="mainPageShow">
      <button class="login">로그인</button>
      <button class="sign_up">회원가입</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, useContext } from '@nuxtjs/composition-api'
export default {
  name: "top-header",
  props:{
    headerTitle:{
      type:Array
    },
    mainPageShow:{
      type:Boolean,
      default() {
        return {
          mainPageShow: true,
        };
      },
    }
  },
  setup(){
    const { store } = useContext()
    const menuTitle = computed(() => store.state.menuTitle)
    return {
      menuTitle,
    }
  },
  data(){
    return{
      mainPage:true
    }
  }
}
</script>

<style lang="scss" scoped>
#header_wrap{
  padding: 20px 20px 20px 0;
  display: flex;
  justify-content: space-between;
  .header_contents {
    dt{
      text-align: left;
      font: normal normal bold 30px/40px NanumSquareRound;
      letter-spacing: -1.5px;
      color: #0D0D0D;
      opacity: 1;
      padding-bottom: 13px;
    }
    dd{
      font: normal normal normal 18px/24px NanumSquareRound;
      margin-bottom: 10px;
    }
  }
  .btn_wrap{
    margin-right: 44px;
    .login{
      color: #0D0D0D;
      background: #F0F0F0;
      padding: 5px;
      border-radius: 5px;
      font-size:18px ;
      font-weight: bold;
      margin-right: 10px;
    }
  }

}
</style>
