<template>
  <div class="item-wrapper button-gradient">
    <img :src="item.image" alt="money" />
    <div>
      <p>{{ item.title1 }}</p>
      <p>{{ item.title2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style lang="scss" scoped>
.item-wrapper {
  width: 163px;
  height: 260px;
  border: 1px solid #0da100;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.item-wrapper img {
  width: calc(100% - 100px);
  height: auto;
}
.item-wrapper p {
  font-weight: $font-bold;
  font-size: $font-h3-text;
}
.item-wrapper div p:nth-child(2) {
  margin: {
    top: 8px;
  }
}
.item-wrapper div {
  text-align: center;
  margin: {
    top: 34px;
  }
}
</style>
