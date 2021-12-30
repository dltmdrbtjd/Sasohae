<template>
  <div>
    <MoneyQuestion />
  </div>
</template>
<script>
import MoneyQuestion from '@/components/money/MoneyQuestion.vue';
export default {
  components: { MoneyQuestion },
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
