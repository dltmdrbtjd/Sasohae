<template>
  <div>
    <FoodCategory />
  </div>
</template>
<script>
import FoodCategory from '@/components/food/FoodCategory.vue';
export default {
  components: { FoodCategory },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
