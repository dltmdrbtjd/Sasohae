<template>
  <GiftChoice />
</template>
<script>
import GiftChoice from '@/components/gift/GiftChoice.vue';
export default {
  components: { GiftChoice },
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
