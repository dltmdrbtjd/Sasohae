<template>
  <div>
    <FoodRecommend />
  </div>
</template>
<script>
import FoodRecommend from '@/components/food/FoodRecommend.vue';
export default {
  components: { FoodRecommend },
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
