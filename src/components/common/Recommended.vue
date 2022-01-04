<template>
  <div class="recommend-wrapper">
    <h2>{{ title }}</h2>
    <slot />
    <button class="goBack" @click="goMainPage">
      <p>홈으로 돌아가기</p>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    recoomendItem: {
      type: Object,
    },
  },
  methods: {
    goMainPage() {
      this.$emit('recommendEvent');
      this.$store.commit('pageNumReset');
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(70px);
.recommend-wrapper {
  width: 100%;
}
.goBack {
  width: 100%;
  padding: 17px 0;
  margin-top: 26px;
  border: 1px solid $black-color;
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  justify-content: center;
  align-items: center;
  &:hover {
    background: {
      color: $black-color;
    }
    color: $white-color;
  }
}
</style>
