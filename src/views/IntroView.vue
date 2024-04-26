<script setup>
import HomeText from '../components/HomeText.vue'
import NavButton from '../components/NavButton.vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'
</script>

<template>
  <HomeText />

  <AppNavigationWrapper>
    <!-- <NavButton buttonText="Back" navigateTo="/"></NavButton> -->
    <NavButton buttonText="Next" navigateTo="/services" />
  </AppNavigationWrapper>
</template>

<style lang="scss" scoped>
#app-navigation {
  flex-flow: row-reverse;
}
</style>
