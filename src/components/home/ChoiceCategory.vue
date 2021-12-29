<template>
  <div class="main-wrapper">
    <div v-if="isLoading" class="splash-wrapper">
      <Splash />
    </div>
    <div class="choice-item-wrapper" v-else>
      <img src="@/assets/UI brand.png" alt="logo" class="logo" />
      <div class="choice-item">
        <ChoiceItem
          v-for="item in checkList"
          :key="item.keys"
          :item="item"
          @click.native="pageMove(item.name)"
        >
          <router-link :to="item.name" />
        </ChoiceItem>
      </div>
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
    pageMove(path) {
      this.$router.push(`${path}`);
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
  width: 375px;
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
.choice-item-wrapper {
  > .logo {
    display: block;
    width: 174px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 46px;
  }
}
</style>
