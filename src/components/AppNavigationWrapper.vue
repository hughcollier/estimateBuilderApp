<template>
  <div id="app-navigation">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
#app-navigation {
  position: absolute;
  bottom: 50px;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
