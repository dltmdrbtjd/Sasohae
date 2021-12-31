<template>
  <div id="app">
    <div id="view">
      <GoBackButton v-if="isPageCheck" @click.native="goBack" />
      <router-view />
    </div>
  </div>
</template>
<script>
import GoBackButton from '@/components/common/goBackArrow.vue';
export default {
  components: { GoBackButton },
  computed: {
    isPageCheck() {
      if (this.$route.path === '/') {
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.visitedCheck();
  },
  methods: {
    goBack() {
      if (
        this.$route.path === '/gift-choice' &&
        this.$store.state.gift.pageNum !== 0
      ) {
        this.$store.commit('changePageNum', -1);
        return;
      }
      this.$router.go(-1);
    },
    async visitedCheck() {
      const visitDate = localStorage.getItem('visitDate');
      if (visitDate !== this.$todayDate() || !visitDate) {
        localStorage.setItem('visitDate', this.$todayDate());
        await this.$http.put('/main');
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: $body-font-family;
}

#view {
  position: relative;
  top: 0;
  left: 0;
  max-width: 375px;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: {
    color: $sub-color;
  }
}
</style>
