<template>
  <div>
    <FoodQuestion />
  </div>
</template>
<script>
import FoodQuestion from '@/components/food/FoodQuestion.vue';
export default {
  components: { FoodQuestion },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
