<template>
  <span class="circle" @click="moveNextPage">
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
  methods: {
    moveNextPage() {
      this.$store.commit('changePageNum', 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.circle {
  width: 101px;
  height: 101px;
  border: 1px solid $main-color;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $main-color;
  text-align: center;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    background: {
      color: $main-color;
    }
    color: $white-color;
  }
}
</style>
