<template>
  <div>
    <GiftRandom />
  </div>
</template>
<script>
import GiftRandom from '@/components/gift/GiftRandom.vue';
export default {
  components: { GiftRandom },
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
