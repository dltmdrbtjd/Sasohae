<template>
  <div class="item-wrapper button-gradient">
    <div class="item-box">
      <img :src="item.image" alt="money" />
      <div>
        <p>{{ item.title1 }}</p>
        <p>{{ item.title2 }}</p>
      </div>
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
  margin: {
    bottom: 30px;
  }
  border: 1px solid #0da100;
  border-radius: 30px;
  cursor: pointer;
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
.item-box {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 164px;
}
</style>
