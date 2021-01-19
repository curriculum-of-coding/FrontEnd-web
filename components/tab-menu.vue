<template>
  <div id="tab_menu_wrap">
    <ul class="tab_menu_contents">
      <li v-for="(items,index) in tabItems" :key="items.field">
        <span
          @click="setItemsFiled(items.name)"
          :class="{active : items.active }">
          {{ items.name }}
        </span>
      </li>
    </ul>
    <div  v-if="mainPageShow" class="new_update">최근 업데이트 : 2021.01.05 23:23:13</div>
  </div>
</template>

<script >
export default {
  name: "tab-menu",
  props: {
    tabItems: {
      type: Array,
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
  data() {
    return {
    }
  },
  methods:{
    setItemsFiled(tabName){
      this.tabItems.forEach(v=>{
        v.active = (v.name===tabName)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 3px solid #F64E5B;
  color: red;
}

#tab_menu_wrap {
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
  align-items: center;
  border-bottom: 3px solid #DFDFDF;

  .new_update {
    font-size: 16px;
    color: #B6B6B6;
    width: 20%;
  }

  .tab_menu_contents {
    display: flex;
    width:  80%;
    justify-content: flex-start;
    flex-wrap: wrap;

    li {
      margin-right: 80px;
      font-size: 20px;
      font-weight: 300;
      span {
        cursor: pointer;
        font-size: 20px;
        padding: 24px 20px;
      }
    }
  }

}
</style>
