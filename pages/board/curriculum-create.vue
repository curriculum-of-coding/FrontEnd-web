<template>
  <div class="curriculum_wrap">
    <commonContentHeader
      :title="'Front-end 카테고리의 자유게시판에 글을 작성합니다.'"
      :sub-title="'즐겁고 유익한 Service_Name을 만들어 가는 일에 동참해주세요!'"
    ></commonContentHeader>
    <commonForm
      @getInputValue="formTitleValue"
      @getTinyValue="formTinyValue"
    ></commonForm>
    <div
      v-for="(list, index) in form.curriculumList"
      :key="index"
      class="curriculum_list_wrap"
    >
      <curriculumForm
        :index="index"
        @getInputTitleValue="titleValue"
        @getInputYoutubeValue="youtubeLinkValue"
        @getTinyValue="tinyValue"
      ></curriculumForm>
      <div class="btn_wrap">
        <button @click="deleteValue(index)" v-if="index !== 0">
          <span class="del_btn">-</span>
          <span>삭제하기</span>
        </button>
        <button @click="addValue">
          <span class="add_btn">+</span>
          <span>추가하기</span>
        </button>
      </div>
    </div>
    <button @click="submit">서비밋</button>
  </div>
</template>

<script>
import commonContentHeader from '@/components/common/common-content-header.vue';
import curriculumForm from '@/components/curriculum/curriculum-comment-form';
import commonForm from '@/components/common/common-form.vue';
import { reactive } from '@nuxtjs/composition-api';

export default {
  components: {
    curriculumForm,
    commonContentHeader,
    commonForm,
  },
  setup() {
    const form = reactive({
      title: '',
      content: '',
      curriculumList: [
        {
          title: '',
          youtube: '',
          content: '',
        },
      ],
    });
    const formTitleValue = v => {
      form.title = v;
    };
    const formTinyValue = v => {
      form.content = v;
    };
    const titleValue = (v, index) => {
      form.curriculumList[index].title = v;
      console.log(form.curriculumList);
    };
    const youtubeLinkValue = (v, index) => {
      form.curriculumList[index].youtube = v;
    };
    const tinyValue = (v, index) => {
      form.curriculumList[index].content = v;
    };
    const addValue = () => {
      form.curriculumList.push({
        title: '',
        youtube: '',
        content: '',
      });
    };
    const deleteValue = index => {
      form.curriculumList.splice(index, 1);
    };
    const submit = () => {
      console.log(form);
    };
    return {
      titleValue,
      youtubeLinkValue,
      tinyValue,
      form,
      submit,
      formTitleValue,
      addValue,
      formTinyValue,
      deleteValue,
    };
  },
  name: 'curriculum-create',
};
</script>

<style lang="scss" scoped>
.curriculum_wrap {
  width: 1474px;
  .curriculum_list_wrap {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    .btn_wrap {
      margin-top: 20px;
      display: flex;
      gap: 30px;
      button {
        outline: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .add_btn,
        .del_btn {
          margin-right: 10px;
          background: #ffffff 0 0 no-repeat padding-box;
          border: 2px solid #f64e5b;
          color: #f64e5b;
          width: 30px;
          display: flex;
          border-radius: 50%;
          height: 30px;
          opacity: 1;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
