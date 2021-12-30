<template>
  <div>
    <WorryBoard />
  </div>
</template>
<script>
import WorryBoard from '@/components/worry/WorryBoard.vue';
export default {
  components: { WorryBoard },
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
