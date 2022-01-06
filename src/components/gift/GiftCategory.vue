<template>
  <div id="gift-category">
    <img src="@/assets/gift.png" alt="gift" />
    <div class="gift-recommended">
      <div @click="moveGiftChoice">
        <div>
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
  mounted() {
    this.getGiftRanking();
  },
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
    async getGiftRanking() {
      try {
        const resp = await this.$http.get('/gifts/ranking');
        this.ranking = resp.data;
      } catch (e) {
        throw Error(e);
      }
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
