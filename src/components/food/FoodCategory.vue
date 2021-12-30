<template>
  <div id="food-category">
    <img src="@/assets/food.png" alt="gift" />
    <div class="food-recommended">
      <div @click="moveFoodChoice">
        <div>
          <p>메뉴 추천</p>
          <p>받을래요</p>
        </div>
      </div>
      <div @click="moveFoodRanking">
        <div>
          <p>실시간</p>
          <p>랭킹 순위</p>
        </div>
      </div>
    </div>
    <span class="ranking-board"></span>
    <img src="@/assets/character.png" alt="character" />
  </div>
</template>
<script>
export default {
  methods: {
    moveFoodChoice() {
      this.$router.push('food-choice');
    },
    moveFoodRanking() {
      this.$router.push('food-ranking');
    },
  },
};
</script>
<style lang="scss" scoped>
#food-category {
  width: 100%;
  height: 100vh;
  position: relative;

  > img:first-child {
    margin: {
      bottom: 52px;
    }
  }

  > .food-recommended {
    width: 100%;
    height: 359px;
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
