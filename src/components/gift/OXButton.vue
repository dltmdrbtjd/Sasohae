<template>
  <span class="button" @click="moveNextPage">
    <p>{{ title }}</p>
  </span>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    pageNum() {
      return this.$store.getters.currentPageNum;
    },
  },
  methods: {
    moveNextPage() {
      if (this.pageNum !== 8) {
        this.$store.commit('changePageNum', 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  width: 100%;
  padding: 16px 0;
  text-align: center;
  border: 1px solid $main-color;
  border-radius: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  color: $main-color;

  &:hover {
    background: {
      color: $main-color;
    }
    color: $white-color;
  }
}
</style>
