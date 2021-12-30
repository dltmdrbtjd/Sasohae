<template>
  <div>
    <h2>최근 1년간 청첩장이 아닌 이유로 만난 적이 있다.</h2>
    <div>
      <button>네</button>
      <button>아니오.</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
div {
  width: 100%;
}

h2 {
  line-height: 2rem;
}

button {
  width: 100%;
  padding: 16px 0;
  text-align: center;
  border: 1px solid $main-color;
  border-radius: 30px;
  margin-bottom: 20px;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  color: $main-color;
  cursor: pointer;

  &:hover {
    background: {
      color: $main-color;
    }
    color: $white-color;
  }
}
</style>
