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
    <div class="ranking-board">
      <span>
        <p>#{{ ranking[0].title }}</p>
        <p>#{{ ranking[3].title }}</p>
      </span>
      <span>
        <p>#{{ ranking[1].title }}</p>
        <p>#{{ ranking[5].title }}</p>
        <p>#{{ ranking[7].title }}</p>
      </span>
      <span>
        <p>#{{ ranking[2].title }}</p>
        <p>#{{ ranking[4].title }}</p>
      </span>
      <span>
        <p>#{{ ranking[6].title }}</p>
        <p>#{{ ranking[8].title }}</p>
        <p>#{{ ranking[9].title }}</p>
      </span>
    </div>
    <img src="@/assets/character.png" alt="character" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      ranking: [],
    };
  },
  methods: {
    moveFoodChoice() {
      this.$router.push('food-choice');
    },
    moveFoodRanking() {
      this.$router.push('food-ranking');
    },
    async getMenuRanking() {
      try {
        const resp = await this.$http.get('/menu/ranking');
        this.ranking = resp.data;
      } catch (e) {
        throw Error(e);
      }
    },
  },
  mounted() {
    this.getMenuRanking();
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
    padding: 30px;
    border: 8px solid $hard-brown-color;
    box-sizing: border-box;
    background: {
      color: $main-color;
    }

    > span {
      width: 400px;
      display: flex;
      justify-content: space-around;
      align-content: center;
      margin-bottom: 10px;
      color: $white-color;
      -webkit-animation-name: movingPara2;
      -webkit-animation-duration: 5.5s;
      animation-name: movingPara;
      animation-duration: 5.5s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;

      &:nth-child(2) {
        width: 600px;
        animation-duration: 5s;
        -webkit-animation-duration: 5s;
      }
      &:nth-child(3) {
        width: 400px;
        animation-duration: 4s;
        -webkit-animation-duration: 4s;
        -webkit-animation-name: movingPara2;
        animation-name: movingPara2;
      }
      &:nth-child(4) {
        width: 600px;
        animation-duration: 6s;
        -webkit-animation-duration: 6s;
      }
    }

    @keyframes movingPara {
      from {
        margin-left: 80%;
      }
      to {
        margin-left: -250%;
      }
    }

    @keyframes movingPara2 {
      from {
        margin-left: 130%;
      }
      to {
        margin-left: -200%;
      }
    }
  }

  > img:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
