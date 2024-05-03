<script setup>
import { defineProps } from 'vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'
import ProgressDisplayWrapper from '../components/ProgressDisplayWrapper.vue'
import ProgressIndicator from '../components/ProgressIndicator.vue'

import NavButton from '../components/NavButton.vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <h1>Your Estimate</h1>
  <h2>
    A project like yours is likely to cost in the region of
    <span class="cost"
      >£{{ total.toLocaleString(auto) }} - £{{
        ((total / 100) * 120).toLocaleString(auto)
      }}</span
    >.
  </h2>
  <p>
    Please remember that this is an indicative cost of a typical project and may
    not be 100% accurate, depending on your unique needs.
  </p>

  <AppNavigationWrapper>
    <NavButton buttonText="Back" navigateTo="/enter-your-details" />
    <NavButton
      buttonText="Adjust Estimate"
      class="btn-secondary"
      navigateTo="/services"
    />
  </AppNavigationWrapper>

  <ProgressDisplayWrapper>
    <ProgressIndicator :activeIndex="4" :totalInSet="4" />
  </ProgressDisplayWrapper>
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
.cost {
  color: a.$tidyBlue;
}

p {
  font-size: a.rem(22);
}
</style>
