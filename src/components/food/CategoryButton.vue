<template>
  <div class="category-wrapper">
    <h2>{{ category.title }}</h2>
    <div class="button-list-wrapper">
      <div v-for="list in category.list" :key="list[0]">
        <input type="radio" :id="list" :name="`${category.title}`" />
        <label :for="list" @click="categoryValue(list)">{{ list }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
  methods: {
    categoryValue(list) {
      this.menuHashTag(list);
      let num = this.category.list.findIndex((i) => i === list);
      if (num === 0 && list !== '식사') num = '*';
      else if (num === 0 && list === '식사') num += 1;
      this.menuSettingAnswer(num);
    },
    menuSettingAnswer(types) {
      switch (this.category.title) {
        case '목적':
          this.$store.commit('choiceMenuType', types);
          break;
        case '종류':
          this.$store.commit('choiceMenuStyle', types);
          break;
        case '누구랑?':
          this.$store.commit('choiceMenuWith', types);
          break;
        default:
          break;
      }
    },
    menuHashTag(tag) {
      switch (this.category.title) {
        case '목적':
          this.$store.commit('menuType', tag);
          break;
        case '종류':
          this.$store.commit('menuStyle', tag);
          break;
        case '누구랑?':
          this.$store.commit('menuWith', tag);
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.category-wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: $font-bold;
  text-align: center;
}
.button-list-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
input[type='radio'] {
  display: none;
  margin: 10px;
}

input[type='radio']:checked + label {
  background: {
    color: $main-color;
  }
  color: $white-color;
}

input[type='radio'] + label {
  display: inline-block;
  padding: 12px 0;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid $main-color;
  border-radius: 10px;
  font-size: 16px !important;
  width: 70px;
  text-align: center;
  color: $main-color;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background: {
      color: $main-color;
    }
    color: $white-color;
  }
}
</style>
