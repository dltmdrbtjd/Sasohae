<template>
  <div id="splash-wrapper">
    <img src="@/assets/main Design.png" alt="splash Image" class="splash" />
    <div class="footer">
      <div>
        <span></span>
        <span></span>
      </div>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
#splash-wrapper {
  position: relative;
  z-index: 1;
  height: 100vh;
}
.splash {
  width: 100%;
  height: auto;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: 2;
}
.footer > div {
  width: 100%;
  height: 6px;
  position: absolute;
  bottom: 34px;
  left: 65%;
}
.footer > div > span {
  display: inline-block;
  width: 36px;
  height: 6px;
  margin-left: 10px;
  background: {
    color: red;
  }
}
.footer > div > span:nth-child(1) {
  background: {
    color: #ffffb7;
  }
}
.footer > div > span:nth-child(2) {
  background: {
    color: #fbfefa;
  }
}
.footer > span:nth-child(2) {
  display: block;
  width: 100%;
  height: 16px;
  background: {
    color: $normal-brown-color;
  }
}
.footer > span:nth-child(3) {
  display: block;
  width: 100%;
  height: 9px;
  background: {
    color: $soft-brown-color;
  }
}
</style>
