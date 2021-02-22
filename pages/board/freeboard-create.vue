<template>
  <div class="curriculum_wrap">
    <commonContentHeader
      :title="'Front-end 카테고리의 자유게시판에 글을 작성합니다.'"
      :sub-title="'즐겁고 유익한 Service_Name을 만들어 가는 일에 동참해주세요!'"
    ></commonContentHeader>
    <commonForm
      :inputLabelID="'제목'"
      :inputHeaderTitle="'내용'"
      @getInputValue="formTitleValue"
      @getTinyValue="formTinyValue"
    ></commonForm>
    <div class="submit_wrap">
      <Nuxt-link :to="'/'">
        <commonBtn :btnTitle="'취소'" :active="false"></commonBtn>
      </Nuxt-link>
      <commonBtn :btnTitle="'등록'" :active="true"></commonBtn>
    </div>
  </div>
</template>

<script>
import commonContentHeader from '@/components/common/common-content-header.vue';
import commonForm from '@/components/common/common-form.vue';
import commonBtn from '@/components/common/common-button.vue';
import { reactive } from '@nuxtjs/composition-api';

export default {
  components: {
    commonContentHeader,
    commonForm,
    commonBtn,
  },
  setup() {
    const form = reactive({
      title: '',
      content: '',
    });
    const formTitleValue = v => {
      form.title = v;
    };
    const formTinyValue = v => {
      form.content = v;
    };
    const submit = () => {
      console.log(form);
    };

    return {
      form,
      submit,
      formTitleValue,
      formTinyValue,
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
  .submit_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 60px 0 90px 0;
  }
}
</style>
