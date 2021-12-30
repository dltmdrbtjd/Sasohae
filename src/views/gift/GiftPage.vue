<template>
  <div>
    <GiftCategory />
  </div>
</template>
<script>
import GiftCategory from '../../components/gift/GiftCategory.vue';
export default {
  components: { GiftCategory },
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
