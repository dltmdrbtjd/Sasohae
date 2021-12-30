<template>
  <div class="button-list-wrapper">
    <div v-for="list in category.list" :key="list[0]">
      <input type="radio" :id="list" :name="`${category.title}`" />
      <label :for="list" @click="categoryValue(list)">{{ list }}</label>
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
      console.log(list);
      return 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.button-list-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
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
