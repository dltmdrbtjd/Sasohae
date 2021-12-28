<template>
  <div class="main-wrapper">
    <div v-if="isLoading" class="splash-wrapper">
      <Splash />
    </div>
    <div class="choice-item" v-else>
      <img src="@/assets/UI brand.png" alt="logo" class="logo" />
      <ChoiceItem v-for="item in checkList" :key="item.keys" :item="item" />
    </div>
  </div>
</template>
<script>
import Splash from '@/components/home/Splash.vue';
import ChoiceItem from '@/components/home/ChoiceItem.vue';
export default {
  components: { Splash, ChoiceItem },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    visit() {
      this.isLoading = true;
    },
  },
  computed: {
    checkList() {
      return this.$store.state.home.checkList;
    },
  },
  mounted() {
    this.visit();
  },
  watch: {
    isLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  height: 100vh;
  background: {
    color: $main-color;
  }
}
.choice-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 335px;
}
.logo {
  width: 174px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 46px;
}
</style>
