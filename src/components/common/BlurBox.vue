<template>
  <div class="blur-box">
    <img
      src="@/assets/leftArrow-white.png"
      alt="goBack"
      @click="modaldeactive"
    />
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
  methods: {
    modaldeactive() {
      this.$emit('modaldeactive');
    },
    moveToGiftPage() {
      this.$router.push('gift');
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 501px) {
  .blur-box {
    position: fixed;
    top: 0;
    left: 65%;
    transform: translateX(-50%);
    width: 375px;
    height: 100vh;
    background-color: rgba(44, 44, 44, 0.7);
    backdrop-filter: blur(4px);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 36px;
      height: 36px;
      cursor: pointer;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
}

@media (max-width: 500px) {
  .blur-box {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
    height: 100vh;
    background-color: rgba(44, 44, 44, 0.7);
    backdrop-filter: blur(4px);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 36px;
      height: 36px;
      cursor: pointer;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
}
</style>
