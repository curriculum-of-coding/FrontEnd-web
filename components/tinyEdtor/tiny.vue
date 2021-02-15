<template>
  <div>
    <span>{{ headerTitle }}</span>
    <editor
      api-key="52vz3v9blkizhob67j79cyzpoxvdp7ksd19jqipg1wdwfpnr"
      :init="init"
      v-model="tinyValue.item"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import { reactive, watch } from '@nuxtjs/composition-api';

export default {
  props: {
    value: {
      type: String,
    },
    headerTitle: String,
  },
  components: {
    Editor,
  },
  setup(props, { emit }) {
    const init = {
      selector: 'textarea', // change this value according to your HTML
      body_class: 'my_class',
      forced_root_block: '',
      height: 442,
      width: 1474,
      menubar: false,
      fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt 40pt',
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen textcolor colorpicker',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | bold italic backcolor | fontsizeselect \
        alignleft aligncenter alignright alignjustify |forecolor  backcolor \
        bullist numlist outdent indent | removeformat | link image table media | code | help',
    };
    const tinyValue = reactive({
      item: props.value,
    });
    watch(
      () => tinyValue.item,
      (newVal, oldVal) => {
        if (newVal != oldVal) {
          emit('setValue', tinyValue.item);
        }
      },
    );
    return { init, tinyValue };
  },
};
</script>
<style scoped>
span {
  text-align: left;
  font: normal normal normal 18px/24px NanumSquareRound;
  letter-spacing: -0.9px;
  color: #0d0d0d;
  margin-bottom: 10px;
  display: inline-block;
}
</style>
