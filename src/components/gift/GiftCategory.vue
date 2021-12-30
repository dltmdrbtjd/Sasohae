<template>
  <div id="gift-category">
    <img src="@/assets/gift.png" alt="gift" />
    <div class="gift-recommended">
      <div @click="moveGiftChoice">
        <div>
          <p>상황별</p>
          <p>선물 추천</p>
          <p>해주세요</p>
        </div>
      </div>
      <div @click="moveGiftRandom">
        <div>
          <p>랜덤 추천 받을래요</p>
        </div>
      </div>
    </div>
    <div @click="moveGiftRanking" class="ranking">실시간 랭킹 순위</div>
    <span class="ranking-board"></span>
    <img src="@/assets/character.png" alt="character" />
  </div>
</template>
<script>
export default {
  methods: {
    moveGiftChoice() {
      this.$router.push('gift-choice');
    },
    moveGiftRandom() {
      this.$router.push('gift-random');
    },
    moveGiftRanking() {
      this.$router.push('gift-ranking');
    },
  },
};
</script>
<style lang="scss" scoped>
#gift-category {
  width: 100%;
  height: 100vh;
  position: relative;

  > img:first-child {
    margin: {
      bottom: 52px;
    }
  }

  > .gift-recommended {
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 163px;
      height: 100%;
      border: 1px solid #0da100;
      border-radius: 30px;

      > div > p {
        width: 94px;
        line-height: 1.5rem;
        text-align: center;
        font-size: $font-h3-text;
        font-weight: $font-bold;
      }
    }
  }

  > .ranking {
    cursor: pointer;
    margin-top: 25px;
    width: 341px;
    height: 85px;
    line-height: 85px;
    border: 1px solid #0da100;
    border-radius: 30px;
    text-align: center;
    vertical-align: middle;
    font-size: $font-h3-text;
    font-weight: $font-bold;
  }

  > .ranking-board {
    width: 327px;
    height: 169px;
    margin: {
      top: 17px;
    }
    border: 8px solid $hard-brown-color;
    box-sizing: border-box;
    background: {
      color: $main-color;
    }
  }

  > img:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
