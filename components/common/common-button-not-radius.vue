<template>
  <button :class="[active ? 'on' : '']">{{ btnTitle }}</button>
</template>

<script>
export default {
  name: 'common-button-not-radius',
  props: {
    btnTitle: String,
    active: Boolean,
  },
  setup() {
    const btnEvent = () => {};
    return { btnEvent };
  },
};
</script>

<style scoped lang="scss">
button {
  background: #fff;
  outline: none;
  cursor: pointer;
  width: 114px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid #f64e5b;
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: center;
  color: #f64e5b;
  opacity: 1;
}
</style>
