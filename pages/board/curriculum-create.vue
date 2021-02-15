<template>
  <div class="curriculum_wrap">
    <commonContentHeader
      :title="'Front-end 카테고리의 자유게시판에 글을 작성합니다.'"
      :sub-title="'즐겁고 유익한 Service_Name을 만들어 가는 일에 동참해주세요!'"
    ></commonContentHeader>
    <curriculumForm></curriculumForm>
    <curriculumAddingForm></curriculumAddingForm>
  </div>
</template>

<script>
import commonContentHeader from '@/components/common/common-content-header.vue';
import curriculumForm from '@/components/curriculum/curriculum-comment-form';
import curriculumAddingForm from '@/components/curriculum/curriculum-comment-adding-form.vue';
export default {
  components: {
    curriculumForm,
    curriculumAddingForm,
    commonContentHeader,
  },
  name: 'curriculum-create',
};
</script>

<style lang="scss" scoped>
.curriculum_wrap {
  padding-right: 50px;
}
</style>
