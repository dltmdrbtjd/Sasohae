<template>
  <div id="food-category">
    <div>
      <strong>당신의 식사를</strong>
      <strong>해시태그 하세요!</strong>
    </div>
    <div class="hash-tag">
      <p>#느끼함</p>
      <p>#중식</p>
      <p>#양식</p>
    </div>
    <h2>{{ hashTag.purpose.title }}</h2>
    <CategoryButton :category="hashTag.purpose" />
    <h2>{{ hashTag.menu.title }}</h2>
    <CategoryButton :category="hashTag.menu" />
    <h2>{{ hashTag.who.title }}</h2>
    <CategoryButton :category="hashTag.who" />
    <button class="recommend-button" @click="recommended">추천받기</button>
  </div>
</template>
<script>
import CategoryButton from '@/components/food/CategoryButton.vue';
export default {
  components: { CategoryButton },
  data() {
    return {
      hashTag: {
        purpose: {
          list: ['식사', '요리', '간식'],
          title: '목적',
        },
        menu: {
          list: ['전체', '한식', '중식', '일식', '양식', '아시아'],
          title: '종류',
        },
        who: {
          list: ['아무나', '혼밥', '친구', '연인', '가족', '모임'],
          title: '누구랑?',
        },
      },
    };
  },
  methods: {
    recommended() {
      this.$router.push('food-recommend');
    },
  },
};
</script>
<style lang="scss" scoped>
#food-category {
  width: 100%;

  > div:first-child {
    position: relative;
    border-bottom: 10px solid #fffdcd;
    margin-bottom: 40px;
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
    > strong {
      display: block;
      font-size: $font-h1-text;
      font-weight: $font-bold;

      &:first-child {
        margin-bottom: 10px;
      }
    }
  }

  > h2 {
    margin-top: 10px;
    margin-bottom: 20px;
    font-weight: $font-bold;
  }
}

.hash-tag {
  display: flex;
  width: 70%;
  justify-content: flex-start;
  margin-bottom: 40px;
  p {
    margin-right: 18px;
    font-size: 22px;
    font-weight: $font-medium;

    &:last-child {
      margin: 0;
    }
  }
}

.recommend-button {
  width: 90%;
  padding: 20px;
  border: 1px solid $main-color;
  border-radius: 30px;
  background: {
    color: $main-color;
  }
  color: $white-color;
  cursor: pointer;
}
</style>
