<script setup>
import { defineProps } from 'vue'
import AppDisplayWrapper from '../components/AppDisplayWrapper.vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'

import NavButton from '../components/NavButton.vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <h1>Your Estimate is Here!</h1>
  <h2>
    A project like yours is likely to cost in the region of £{{ total }} - £{{
      (total / 100) * 120
    }}
  </h2>
  <AppNavigationWrapper>
    <NavButton buttonText="Back" navigateTo="/enter-your-details" />
    <NavButton buttonText="Start Over" class="btn-secondary" navigateTo="/" />
  </AppNavigationWrapper>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

.btn-secondary {
  background-color: transparent;
  border: 3px solid #01d6e1;

  &:hover {
    border-color: color-mix(in oklab, #01d6e1 90%, black);
    color: black;
  }
}

h2 {
  font-size: a.rem(40);
}
</style>
