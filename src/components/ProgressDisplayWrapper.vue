<template>
  <div id="progress-indicator-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#progress-indicator-wrapper {
  position: absolute;
  bottom: 0px;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}
</style>
