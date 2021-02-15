<template>
  <button :class="[active ? 'on' : '']">{{ btnTitle }}</button>
</template>

<script>
export default {
  name: 'common-button',
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
  width: 150px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid #f64e5b;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #f64e5b;
  opacity: 1;
  &.on {
    color: #fff;
    background: #f64e5b 0 0 no-repeat padding-box;
  }
}
</style>
