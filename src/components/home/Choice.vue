<template>
  <div class="main-wrapper">
    <div v-if="isLoading" class="splash-wrapper">
      <Splash />
    </div>
    <div v-else>
      <ChoiceItem v-for="item in checkList" :key="item.keys" :item="item" />
    </div>
  </div>
</template>
<script>
import Splash from '@/components/home/Splash.vue';
import ChoiceItem from '@/components/home/ChoiceItem.vue';
import money from '@/assets/gift.png';
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
          image: gift,
          title1: '친구 선물',
          title2: '이거 어때요?',
        },
        {
          keys: 2,
          image: food,
          title1: '오늘 점심은',
          title2: '이게 좋아요!',
        },
        {
          keys: 3,
          image: money,
          title1: '축의금은',
          title2: '이정도 내세요.',
        },
        {
          keys: 4,
          image: worry,
          title1: '고민을',
          title2: '공유해요.',
        },
      ],
    };
  },
  methods: {
    visit() {
      this.isLoading = true;
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
</style>
