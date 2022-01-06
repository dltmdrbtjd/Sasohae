<template>
  <div id="ranking-wrapper">
    <h2>실시간 {{ categoryCheck }} 랭킹 !</h2>
    <div class="ranking-list">
      <div v-for="rank in ranking" :key="rank.rank">
        <img :src="rank.imgUrl" alt="food" />
        <div class="ranking-number">
          <strong>{{ rank.rank }}</strong>
          <span v-if="rank.variance > 0">
            <img src="@/assets/up.png" alt="up" />
            <p class="up">{{ rank.variance }}</p>
          </span>
          <span v-else-if="rank.variance < 0">
            <img src="@/assets/down.png" alt="down" />
            <p class="down">{{ rank.variance }}</p>
          </span>
          <span v-else-if="rank.variance === 'New'">
            <p class="new">{{ rank.variance }}</p>
          </span>
          <span v-else>
            <p>- {{ rank.variance }}</p>
          </span>
        </div>
        <div class="title-box">
          <p>{{ rank.title }}</p>
          <p>{{ rank.likeCnt }}명 추천 !</p>
        </div>
        <span class="right-arrow" @click="modalActive(rank)"></span>
      </div>
    </div>
    <BlurBox v-if="isModal" @modaldeactive="modalActive">
      <div class="card">
        <img :src="detailRank.imgUrl" alt="gift" />
        <strong>{{ detailRank.likeCnt }}명이 좋아한</strong>
        <strong>{{ detailRank.title }}입니다.</strong>
        <p>다른 {{ categoryCheck }} 추천 받고 싶으세요?</p>
        <button @click="moveToGiftPage">
          {{ categoryCheck }} 추천받으러 가기
        </button>
        <button class="home-btn" @click="moveToHomePage">
          홈으로 돌아가기
        </button>
      </div>
    </BlurBox>
  </div>
</template>
<script>
import BlurBox from '@/components/common/BlurBox.vue';
export default {
  components: { BlurBox },
  props: {
    ranking: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isModal: false,
      detailRank: null,
    };
  },
  computed: {
    categoryCheck() {
      if (this.$route.path === '/gift-ranking') {
        return '선물';
      }
      return '메뉴';
    },
  },
  methods: {
    moveToHomePage() {
      this.$router.push('/');
    },
    moveToGiftPage() {
      if (this.$route.path === '/gift-ranking') {
        this.$router.push('gift');
      } else if (this.$route.path === '/food-ranking') {
        this.$router.push('food');
      }
    },
    modalActive(rank) {
      if (this.isModal) {
        this.isModal = false;
      } else {
        this.detailRank = rank;
        this.isModal = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#ranking-wrapper {
  width: 100%;
}

h2 {
  font-size: $font-h1-text;
  font-weight: bold;
  margin-bottom: 30px;
}

.card {
  width: 275px;
  height: 470px;
  border: 9px solid $hard-brown-color;
  border-radius: 10px;
  background: {
    color: $sub-color;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .home-btn {
    border: 1px solid $black-color;
    color: $black-color;
    &:hover {
      background: {
        color: $black-color;
      }
      color: $white-color;
    }
  }

  > img {
    width: 140px;
    height: 140px;
  }

  > strong {
    font-size: 22px;
    font-weight: $font-bold;
  }

  > strong:nth-child(2) {
    margin-top: 20px;
  }

  > strong:nth-child(3) {
    margin-top: 6px;
    margin-bottom: 50px;
    border-bottom: 10px solid #fffdcd;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      transform: rotate(60deg);
      bottom: -15px;
      right: 0;
      width: 18px;
      height: 7px;
      border-radius: 3px;
      background: {
        color: #fffdcd;
      }
      box-shadow: 0.5px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  > button {
    width: 235px;
    height: 58px;
    margin-top: 16px;
    color: $main-color;
    cursor: pointer;
    border: 1px solid $main-color;
    border-radius: 30px;
    background: {
      color: rgba(0, 0, 0, 0);
    }

    &:hover {
      background: {
        color: $main-color;
      }
      color: $white-color;
    }
  }
}

.ranking-list {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: {
    color: $white-color;
  }

  > div {
    display: flex;
    padding: 10px;
    align-items: center;

    > img {
      width: 40px;
      height: 40px;
    }

    > .ranking-number {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > strong {
        font-size: 25px;
        font-weight: $font-bold;
      }

      > span {
        display: flex;
        color: #878787;

        > img {
          width: 8px;
          height: 8px;
          margin-top: 3px;
          margin-right: 3px;
        }

        > .up {
          color: #e54240;
        }

        > .down {
          color: #00b2ff;
        }

        > .new {
          color: #ff1acd;
        }
      }
    }

    .title-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;

      > p:first-child {
        font-size: $font-button-text;
        font-weight: $font-bold;
        margin-bottom: 6px;
      }

      > p:last-child {
        font-size: $font-small-text;
        font-weight: $font-regular;
        color: #878787;
      }
    }

    > span {
      width: 30px;
      height: 30px;
      display: block;
      cursor: pointer;
      background: {
        image: url('../../assets/right-arrow.png');
        size: contain;
        repeat: no-repeat;
      }
    }
  }
}
</style>
