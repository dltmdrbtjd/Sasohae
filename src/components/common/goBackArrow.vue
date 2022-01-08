<template>
  <div v-if="isGiftPage">
    <img src="@/assets/leftArrow.png" alt="goBack" />
  </div>
</template>
<script>
export default {
  computed: {
    pageNum() {
      return this.$store.getters.currentPageNum;
    },
    isGiftPage() {
      if (this.pageNum === 8) {
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  > img {
    width: 36px;
    height: 36px;
    cursor: pointer;
  }
}
</style>
