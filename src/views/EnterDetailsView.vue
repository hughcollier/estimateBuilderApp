<script setup>
import { ref } from 'vue'
import NavButton from '../components/NavButton.vue'
import AppNavigationWrapper from '../components/AppNavigationWrapper.vue'
import ProgressDisplayWrapper from '../components/ProgressDisplayWrapper.vue'
import ProgressIndicator from '../components/ProgressIndicator.vue'
import Form from '../components/Form.vue'
</script>

<template>
  <Form />

  <AppNavigationWrapper>
    <NavButton buttonText="Back" navigateTo="/services" />
    <NavButton buttonText="Next" navigateTo="/your-estimate" />
  </AppNavigationWrapper>

  <ProgressDisplayWrapper>
    <ProgressIndicator :activeIndex="3" :totalInSet="4" />
  </ProgressDisplayWrapper>
</template>
