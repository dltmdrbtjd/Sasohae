<template>
  <div>
    <h2>{{ questionTitle }}</h2>
    <div class="flexible">
      <slot></slot>
    </div>
    <p v-if="subText">{{ subText }}</p>
  </div>
</template>
<script>
export default {
  props: {
    questionTitle: {
      type: String,
    },
    subText: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
.flexible {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

p {
  text-align: center;
  margin-top: 60px;
  color: $main-color;
  font-weight: $font-bold;
}
</style>
