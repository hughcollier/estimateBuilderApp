<script setup>
import NavButton from '../components/NavButton.vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'
</script>

<template>
  <h1>Enter Your Details</h1>
  <AppNavigationWrapper>
    <NavButton buttonText="Back" navigateTo="/Services" />
    <NavButton buttonText="Next" navigateTo="/your-estimate" />
  </AppNavigationWrapper>
</template>
