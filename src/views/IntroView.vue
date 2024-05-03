<script setup>
import HomeText from '../components/HomeText.vue'
import NavButton from '../components/NavButton.vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'
import ProgressDisplayWrapper from '../components/ProgressDisplayWrapper.vue'
import ProgressIndicator from '../components/ProgressIndicator.vue'
</script>

<template>
  <HomeText />

  <AppNavigationWrapper>
    <!-- <NavButton buttonText="Back" navigateTo="/"></NavButton> -->
    <NavButton buttonText="Next" navigateTo="/services" />
  </AppNavigationWrapper>

  <ProgressDisplayWrapper>
    <ProgressIndicator :activeIndex="1" :totalInSet="4" />
  </ProgressDisplayWrapper>
</template>

<style lang="scss" scoped>
#app-navigation {
  flex-flow: row-reverse;
}
</style>
