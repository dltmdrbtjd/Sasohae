<template>
  <div>
    <Ranking />
  </div>
</template>
<script>
import Ranking from '@/components/common/Ranking.vue';
export default {
  components: { Ranking },
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
