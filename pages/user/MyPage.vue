<template>
  <div class="mypage">
    <div class="user_info">
      <span>
        {{ loginStatus.userInfo.email }}
      </span>
      <div class="user_options">
        <div>비밀번호 재설정</div>
        <div>서비스 탈퇴</div>
      </div>
    </div>

    <div class="user_subinformation">
      <div class="user_profile"></div>
      <div class="user_name">
        {{ loginStatus.userInfo.nickname }}
      </div>
      <div class="interast">
        <span>관심분야</span>
        <customCheckBox
          @setCheckbox="getCheckbox"
          :checkBoxArray="checkBoxItems"
        ></customCheckBox>
      </div>
    </div>
    <AccountSyncCard
      account-type="Github"
      description="Github 계정을 연동하시면 현직 개발자 인증을 받으실 수 있습니다."
      sync-account="account"
    />
    <AccountSyncCard
      account-type="Google"
      description="Google 계정을 연동하시면 이미 시청한 강의를 확인하실 수 있습니다."
    />
    <div class="tab_menu_area">
      <tab-menu :tabItems="tabItem" :main-page-show="false" />
    </div>
    <SearchInput :inputWidth="'963px'" />
    <!-- <div class="list_area">
      <normalList
        :bntDisableCheck="false"
        :tableListItems="listItems.front.list"
      ></normalList>
    </div> -->
    <div class="pagenation_area">
      <commonCutsomPaging :page="5" :total-page="5"> </commonCutsomPaging>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccountSyncCard from '../../components/cards/AccountSyncCard.vue';
import SearchInput from '../../components/inputs/SearchInput.vue';
import tabMenu from '@/components/tab-menu.vue';
import normalList from '@/components/board/normal-board/normal-board-list.vue';
import commonCutsomPaging from '~/components/common/common-pagination.vue';
import customCheckBox from '@/components/common/common-checkbox.vue';

import {
  reactive,
  computed,
  useContext,
  onMounted,
  watchEffect,
} from '@nuxtjs/composition-api';

export default Vue.extend({
  components: {
    AccountSyncCard,
    SearchInput,
    tabMenu,
    // normalList,
    customCheckBox,
    commonCutsomPaging,
  },
  setup() {
    const { store } = useContext();
    const loginStatus = computed(() => store.state.loginSuccess);

    const userInformation = reactive(store.state.loginSuccess.userInfo);

    const checkBoxItems = reactive([
      { id: '프론트앤드', check: true },
      { id: '백앤드', check: true },
      { id: '데브옵스', check: false },
    ]);
    const getCheckbox = (value: any) => {
      value.includes('프론트앤드')
        ? (userInformation.interests[0].front = 'Y')
        : (userInformation.interests[0].front = 'N');
      value.includes('백앤드')
        ? (userInformation.interests[0].back = 'Y')
        : (userInformation.interests[0].back = 'N');
      value.includes('데브옵스')
        ? (userInformation.interests[0].devops = 'Y')
        : (userInformation.interests[0].devops = 'N');
      console.log(userInformation.interests[0], value);
    };

    const getUserInter = () => {
      loginStatus.value.userInfo.interests[0].front === 'Y'
        ? (checkBoxItems[0].check = true)
        : (checkBoxItems[0].check = false);
      loginStatus.value.userInfo.interests[0].back === 'Y'
        ? (checkBoxItems[1].check = true)
        : (checkBoxItems[1].check = false);
      loginStatus.value.userInfo.interests[0].devops === 'Y'
        ? (checkBoxItems[2].check = true)
        : (checkBoxItems[2].check = false);
      console.log(checkBoxItems);
    };
    getUserInter();
    const changeUserInformation = () => {
      
    };
    // const listItems = reactive({
    //   front: {
    //     title: 'Front',
    //     list: [
    //       {
    //         FFB_ID: 1,
    //         categories: '자유게시판',
    //         TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
    //         CONTENT: '내용입니다',
    //         REG_USER_ID: '14',
    //         REG_DATE: '20210118',
    //       },
    //       {
    //         FFB_ID: 2,
    //         categories: '자유게시판',
    //         TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
    //         CONTENT: '내용입니다',
    //         REG_USER_ID: '14',
    //         REG_DATE: '20210118',
    //       },
    //       {
    //         FFB_ID: 3,
    //         categories: '자유게시판',
    //         TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
    //         CONTENT: '내용입니다',
    //         REG_USER_ID: '14',
    //         REG_DATE: '20210118',
    //       },
    //       {
    //         FFB_ID: 4,
    //         categories: '자유게시판',
    //         TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
    //         CONTENT: '내용입니다',
    //         REG_USER_ID: '14',
    //         REG_DATE: '20210118',
    //       },
    //       {
    //         FFB_ID: 5,
    //         categories: '자유게시판',
    //         TITLE: '다들 이런 경우엔 어떻게 해결하시나요.',
    //         CONTENT: '내용입니다',
    //         REG_USER_ID: '14',
    //         REG_DATE: '20210118',
    //       },
    //     ],
    //   },
    // });
    const tabItem = reactive([
      {
        name: '내가작성한글',
        active: true,
        link: '',
      },
      { name: '내가 좋아하는 글', active: false, link: '' },
    ]);
    return {
      tabItem,
      getUserInter,
      userInformation,
      checkBoxItems,
      loginStatus,
      getCheckbox,
      changeUserInformation,
    };
  },
});
</script>

<style lang="scss" scoped>
.mypage {
  .user_info {
    span {
      text-align: left;
      font: normal normal 800 26px/30px NanumSquareRound;
      letter-spacing: -1.3px;
      color: #0d0d0d;
      opacity: 1;
    }
    .user_options {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 50.5px;
      padding-bottom: 50.5px;
      border-bottom: 3px solid #dfdfdf;
      div {
        color: #0393ee;
        text-decoration: underline;
        margin-top: 24px;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
  .tab_menu_area {
    margin-bottom: 48.5px;
    margin-top: 70px;
  }
  .list_area {
    margin-top: 70px;
    padding-right: 50px;
  }
  .pagenation_area {
    margin-top: 30.5px;
    margin-bottom: 100px;
  }
  .user_subinformation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 48px;
    .user_profile {
      width: 56px;
      height: 56px;
      margin-right: 25px;
      background: #f64e5b 0% 0% no-repeat padding-box;
      border-radius: 50%;
    }
    .user_name {
      position: relative;
      color: #0d0d0d;
      font-weight: 500;
      &::after {
        position: absolute;
        right: -30.5px;
        top: 2px;
        content: '';
        background: #b3b3b3;
        height: 15px;
        width: 1px;
      }
    }
    .interast {
      margin-left: 60.5px;
      display: flex;
      align-items: center;
      span {
        margin-right: 25px;
        color: #0d0d0d;
        font-weight: 500;
      }
    }
  }
}
</style>
