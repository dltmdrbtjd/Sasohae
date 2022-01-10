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
import money from '@/assets/money.png';
import food from '@/assets/food.png';
import gift from '@/assets/gift.png';
import worry from '@/assets/worry.png';

export default {
  components: { Splash, ChoiceItem },
  data() {
    return {
      isLoading: false,
      checkList: [
        {
          keys: 1,
          name: 'gift',
          image: gift,
          title1: '친구 선물',
          title2: '이거 어때요?',
        },
        {
          keys: 2,
          name: 'food',
          image: food,
          title1: '오늘 점심은',
          title2: '이게 좋아요!',
        },
        {
          keys: 3,
          name: 'money',
          image: money,
          title1: '축의금은',
          title2: '이정도 내세요.',
        },
        {
          keys: 4,
          name: 'worry',
          image: worry,
          title1: '고민을',
          title2: '공유해요.',
        },
      ],
    };
  },
  methods: {
    visit() {
      if (!this.isSplash) {
        this.isLoading = true;
        this.$store.commit('isVisited', true);
      }
    },
    pageMove(path) {
      this.$router.push(`${path}`);
    },
  },
  computed: {
    isSplash() {
      return this.$store.getters.isSplash;
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
