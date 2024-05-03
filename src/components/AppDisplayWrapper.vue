<template>
  <div class="display-frame">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

.display-frame {
  width: 90%;
  background-color: #f5f5f5;
  min-height: 70vh;
  border-radius: 25px;
  padding: 50px;
  font-size: a.rem(16);
  position: relative;
  box-shadow: 8px 8px 0px a.$tidyBlue;
}
</style>
