<template>
  <div id="ranking-wrapper">
    <h2>실시간 선물 랭킹 !</h2>
    <div class="ranking-list">
      <div>
        <img src="@/assets/food.png" alt="food" />
        <strong class="ranking-number">1</strong>
        <div class="title-box">
          <p>케이크</p>
          <p>1700명 추천 !</p>
        </div>
        <span class="right-arrow" @click="modalActive"></span>
      </div>
    </div>
    <BlurBox v-if="isModal" @modaldeactive="modalActive">
      <div class="card">
        <img src="@/assets/gift.png" alt="gift" />
        <strong>1,700명이 좋아한</strong>
        <strong>케이크입니다.</strong>
        <p>다른 선물을 추천 받고 싶으세요?</p>
        <button @click="moveToGiftPage">선물 추천받으러 가기</button>
      </div>
    </BlurBox>
  </div>
</template>
<script>
import BlurBox from '@/components/common/BlurBox.vue';
export default {
  components: { BlurBox },
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    moveToGiftPage() {
      if (this.$route.path === '/gift-ranking') {
        this.$router.push('gift');
      }
    },
    modalActive() {
      if (this.isModal) {
        this.isModal = false;
      } else {
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

    > strong {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: $font-bold;
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
