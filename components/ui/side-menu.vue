<template>
  <div class="side-menu">
    <div class="main-side">
      <div class="logo">
        LOGO
      </div>
      <div class="menu-list">
        <div class="menu-area" v-for="menu in menuList" :key="menu.name">
          <nuxt-link
            class="btn-menu"
            :class="{
              active: menu.active,
            }"
            :to="menu.url"
            @click.native="onClickMenuButton(menu)"
          >
            <font-awesome-icon class="icon-btn-menu" :icon="menu.icon" />
            <span class="menu-name">{{ menu.name }}</span>
          </nuxt-link>
          <div
            v-show="!isClosedSubmenu && menu.active && menu.submenu"
            class="sub-menu-area"
          >
            <div
              class="sub-menu"
              v-for="submenu in menu.submenu"
              :key="submenu.name"
            >
              <nuxt-link
                class="name"
                :class="{
                  active: submenu.active,
                }"
                :to="submenu.url"
                @click.native="onClickMenuButton(submenu)"
                >{{ submenu.name }}
              </nuxt-link>
              <div class="sub-sub-menu">
                <div
                  class="name"
                  v-for="subsubmenu in submenu.submenu"
                  :key="subsubmenu.name"
                >
                  <nuxt-link
                    class="name-link"
                    :class="{
                      active: subsubmenu.active,
                    }"
                    :to="subsubmenu.url"
                    @click.native="onClickMenuButton(subsubmenu)"
                    >{{ subsubmenu.name }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!isClosedSubmenu && hasSubMenu" class="sub-side">
      <div class="btn-close" @click="onCloseSubSide">
        <font-awesome-icon icon="chevron-left" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, ref, computed, useContext } from '@nuxtjs/composition-api';

import Menu from '@/types/menu';

const deepAddActiveToMenu = (menu: Menu) => {
  menu.active = false;
  if (menu.submenu)
    menu.submenu.forEach(submenu => {
      deepAddActiveToMenu(submenu);
    });
};
const findRoutePathInMenuAndActive = (menu: Menu, path: string) => {
  menu.active = false;
  let active = false;
  if (menu.submenu) {
    for (const submenu of menu.submenu) {
      if (findRoutePathInMenuAndActive(submenu, path)) active = true;
    }
  }
  return (menu.active = active || menu.url === path);
};

export default {
  //메인메뉴
  // icon: ['far', 'thumbs-up'], 선택
  // name: '추천강의', 필수
  // subTitle:'위마루씨가 추천하는 강의추천 추천강의는 추천강의입니다', 선택
  // url: '/본방 중계방 추천 추천 모바일도 추천 추처~언 추천을 하면은↘ 건강이 좋아져요~ 세상이 밝아져요오~↗ 뾰~옹★', 필수
  // active: false, 필수
  //서브메뉴
  // submenu: [
  //   {
  //     name: '공지사항',  필수
  //     url: '/board/notice', 필수
  //     subTitle: '위마루씨가 추천하는 커리큘럼 커리큘럼 커리큘럼', 선택
  //   }
  // ]
  name: 'side-menu',
  setup() {
    const { route, store } = useContext();
    const menuTitle = computed(() => store.state.menuTitle);
    const setMenuTitle = (menuTitle: any) => {
      store.commit('setMenuTitle', menuTitle);
    };
    const originMenuList = [
      {
        icon: 'home',
        name: '커리큘럼',
        subTitle: '이런 강의는 어떠신가요? 현직자들이 추천하는 커리큘럼입니다.',
        url: '/',
        active: false,
      },
      {
        icon: ['far', 'thumbs-up'],
        name: '추천강의',
        subTitle: '위마루씨가 추천하는 강의추천 추천강의는 추천강의입니다',
        url:
          '/본방 중계방 추천 추천 모바일도 추천 추처~언 추천을 하면은↘ 건강이 좋아져요~ 세상이 밝아져요오~↗ 뾰~옹★',
        active: false,
      },
      {
        icon: 'book-open',
        name: '커리큘럼1',
        url: '/curriculum',
        subTitle: '위마루씨가 추천하는 커리큘럼 커리큘럼 슬라이드',
        active: false,
      },
      {
        icon: 'chalkboard',
        name: '게시판',
        url: '/board/notice',
        subTitle: '게시판 메인입니다',
        active: false,
        submenu: [
          {
            name: '공지사항',
            url: '/board/notice',
            subTitle: '위마루씨가 추천하는 커리큘럼 커리큘럼 커리큘럼',
          },
          {
            name: 'Front-end',
            url: '/board/fe',
            subTitle: '프론트앤드 게시판',
            submenu: [
              {
                name: '자유게시판',
                url: '/board/fe/free',
                subTitle: '위마루씨가 상주하고있는 자유게시판',
              },
              {
                name: '질문과 답글',
                url: '/board/fe/qa',
                subTitle: '위마루씨가 상주하고있는 질문과 답글',
              },
              {
                name: '커리큘럼',
                url: '/board/fe/curriculum',
                subTitle: '위마루씨가 상주하고있는 커리큘럼 게시판',
              },
            ],
          },
        ],
      },
    ];
    originMenuList.forEach(menu => {
      deepAddActiveToMenu(menu);
    });
    originMenuList.forEach(menu => {
      findRoutePathInMenuAndActive(menu, route.value.path);
    });
    const menuList: Ref<Menu[]> = ref(originMenuList);

    const onClickMenuButton = (menu: Menu) => {
      setMenuTitle(menu);
      isClosedSubmenu.value = false;
      menuList.value.forEach(otherMenu => {
        findRoutePathInMenuAndActive(otherMenu, menu.url);
      });
    };

    const hasSubMenu = computed(() => {
      return !!menuList.value.find(menu => menu.active)?.submenu;
    });

    const isClosedSubmenu = ref(false);
    const onCloseSubSide = () => {
      isClosedSubmenu.value = true;
    };

    return {
      menuList,
      onClickMenuButton,
      hasSubMenu,
      isClosedSubmenu,
      onCloseSubSide,
      menuTitle,
      setMenuTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  display: flex;
  min-height: 100vh;
  height: 100%;

  .main-side {
    width: 163px;
    background: #354151;

    .logo {
      margin: {
        top: 45px;
        left: 36px;
      }
      font-size: 24px;
      color: white;
    }

    .menu-list {
      margin: {
        top: 53px;
      }

      .menu-area {
        display: inline-flex;
        position: relative;

        &:not(:nth-of-type(1)) {
          margin-top: 38px;
        }

        .btn-menu {
          display: inline-flex;
          align-items: center;
          margin-left: 19px;
          width: 160px;
          height: 40px;
          color: #dfdfdf;
          border-radius: 20px;
          z-index: 1;

          &.active,
          &:hover {
            background-color: #f64e5b;
            color: white;
          }

          .icon-btn-menu {
            margin-left: 20px;
            width: 18px;
          }

          .menu-name {
            margin-left: 13px;
            font-weight: normal;
            letter-spacing: 0px;
            font-size: 17px;
          }
        }
      }

      .sub-menu-area {
        position: absolute;
        left: 205px;
        top: 8px;
        width: 141px;

        .sub-menu {
          &:not(:nth-of-type(1)) {
            margin-top: 38px;
          }

          & > .name {
            color: #354151;
            font-size: 18px;
            font-weight: bold;

            &.active,
            &:hover {
              color: #f64e5b;
            }
          }

          .sub-sub-menu {
            margin-left: 15px;

            & > .name {
              margin-top: 27px;

              .name-link {
                font-size: 16px;
                color: #969696;
                font-weight: normal;

                &.active,
                &:hover {
                  color: #f64e5b;
                }
              }
            }
          }
        }
      }
    }
  }

  .sub-side {
    background-color: #f6f6f6;
    width: 185px;

    .btn-close {
      display: inline-block;
      width: 8.06px;
      height: 14.5px;
      margin: {
        top: 56.5px;
        left: 44.5px;
      }
      cursor: pointer;
    }
  }
}
</style>
