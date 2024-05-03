<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  activeIndex: {
    type: Number,
    required: true,
  },
  totalInSet: {
    type: Number,
    required: true,
  },
})

const buildArray = function (totalInSet) {
  let navigationIndicatorArray = []
  for (let i = 0; i < totalInSet; i++) {
    navigationIndicatorArray.push('•')
  }
  return navigationIndicatorArray
}

const navigationIndicatorArray = buildArray(props.totalInSet)
</script>

<template>
  <ul>
    <li
      :class="activeIndex === index + 1 ? 'active' : ''"
      v-for="(item, index) in navigationIndicatorArray"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

ul {
  display: flex;
  justify-content: center;
  width: 100%;

  li {
    list-style: none;
    font-size: a.rem(75);
    opacity: 0.2;

    &.active {
      color: a.$tidyBlue;
      opacity: 1;
    }
  }
}
</style>
