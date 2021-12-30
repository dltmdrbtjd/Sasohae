<template>
  <div class="recommend-wrapper">
    <h2>추천 선물이에요 !</h2>
    <div class="recommend-box">
      <img src="@/assets/food.png" alt="food" />
      <strong>케이크</strong>
      <p>지금까지 1,700명이 추천했어요!</p>
      <span class="like-button"></span>
    </div>
    <button class="refresh">
      <span />
      <p>다른 추천도 준비했어요!</p>
      <p>2/3</p>
    </button>
    <button class="goBack" @click="goMainPage">
      <p>홈으로 돌아가기</p>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    recommendItem: {
      type: String,
    },
    recommendNumber: {
      type: Number,
    },
  },
  methods: {
    goMainPage() {
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(70px);
.recommend-wrapper {
  width: 100%;
}
.recommend-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $white-color;
  width: 250px;
  height: 320px;
  border: 8px solid $soft-brown-color;
  border-radius: 10px;
  position: relative;
  background: {
    color: $main-color;
  }

  > img {
    margin-bottom: 30px;
  }

  > strong {
    font-weight: $font-bold;
    font-size: $font-h1-text;
    margin-bottom: 10px;
  }

  > p {
    font-weight: $font-regular;
    font-size: $font-small-button-text;
  }
  .like-button {
    width: 99px;
    height: 42px;
    display: block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: {
      image: url('../../assets/like.png');
      repeat: no-repeat;
    }
    &:hover {
      background: {
        image: url('../../assets/like-hover.png');
      }
    }
    cursor: pointer;
  }
}

.refresh {
  width: 100%;
  padding: 17px 0;
  margin-top: 26px;
  color: $main-color;
  border: 1px solid $main-color;
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  justify-content: space-around;
  align-items: center;

  &:hover {
    > span {
      background: {
        image: url('../../assets/refresh-white.png');
      }
    }
    background: {
      color: $main-color;
    }
    color: $white-color;
  }

  > span {
    width: 16px;
    height: 16px;
    background: {
      image: url('../../assets/refresh.png');
      size: cover;
    }
  }
}
.goBack {
  width: 100%;
  padding: 17px 0;
  margin-top: 26px;
  border: 1px solid $black-color;
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  justify-content: center;
  align-items: center;
  &:hover {
    background: {
      color: $black-color;
    }
    color: $white-color;
  }
}
</style>
