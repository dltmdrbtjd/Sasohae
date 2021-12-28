<template>
  <div id="app">
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: $body-font-family;
}

#view {
  max-width: 424px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
