<script setup>
import ServiceList from '../components/ServiceList.vue'
import NavButton from '../components/NavButton.vue'
import AppDisplayWrapper from '../components/AppDisplayWrapper.vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'
import ProgressDisplayWrapper from '../components/ProgressDisplayWrapper.vue'
import ProgressIndicator from '../components/ProgressIndicator.vue'

import { defineProps } from 'vue'

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
})

// Do I even need this function?

function handleSelectionUpdate(updatedServices) {
  emit('update-selection', updatedServices)
}
</script>

<template>
  <h1>Select Services</h1>

  <p>
    Please select the services you are interested in.
    <span class="desltop-only">
      You can hover over the
      <span class="material-symbols-outlined tooltip-icon"> info </span> icon
      for more info.</span
    >
  </p>

  <ServiceList :services="services" @update-selection="handleSelectionUpdate" />
  <AppNavigationWrapper>
    <NavButton buttonText="Back" navigateTo="/" />
    <NavButton buttonText="Next" navigateTo="/enter-your-details" />
  </AppNavigationWrapper>

  <ProgressDisplayWrapper>
    <ProgressIndicator :activeIndex="2" :totalInSet="4" />
  </ProgressDisplayWrapper>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

.tooltip-icon {
  color: #ccc;
  position: relative;
  top: 5px;
}

p {
  font-size: a.rem(22);
}
</style>
