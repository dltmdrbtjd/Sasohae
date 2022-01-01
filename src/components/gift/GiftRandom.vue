<template>
  <Recommended :title="'랜덤 추천 선물이에요!'">
    <template>
      <div class="recommend-box">
        <img :src="giftPhoto" alt="food" />
        <strong>{{ giftName }}</strong>
        <p>지금까지 {{ giftLikeCnt }}명이 추천했어요!</p>
      </div>
    </template>
  </Recommended>
</template>
<script>
import Recommended from '@/components/common/Recommended.vue';
export default {
  components: { Recommended },
  data() {
    return {
      selectedId: null,
      randomGifts: [],
    };
  },
  mounted() {
    this.answerReuqest();
  },
  computed: {
    giftPhoto() {
      return (
        this.randomGifts &&
        this.randomGifts[this.randomGift] &&
        this.randomGifts[this.randomGift].giftUrl
      );
    },
    giftLikeCnt() {
      return (
        this.randomGifts &&
        this.randomGifts[this.randomGift] &&
        this.randomGifts[this.randomGift].giftLikeCnt
      );
    },
    giftName() {
      return (
        this.randomGifts &&
        this.randomGifts[this.randomGift] &&
        this.randomGifts[this.randomGift].giftName
      );
    },
    randomGift() {
      const giftNumber = Math.floor(Math.random() * this.randomGifts.length);
      return giftNumber;
    },
  },
  methods: {
    async answerReuqest() {
      try {
        const resp = await this.$http.get('/gifts/random');
        this.randomGifts = resp.data.randomGifts;
      } catch (e) {
        throw Error(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
@include recommend();
</style>
