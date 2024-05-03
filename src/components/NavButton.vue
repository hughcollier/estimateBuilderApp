<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  navigateTo: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    required: false,
  },
})

// Use Vue Router
const router = useRouter()

// Handle Button Press
const handleButtonPress = () => {
  router.push(props.navigateTo)
}
</script>

<template>
  <button
    v-on:click="handleButtonPress"
    v-bind:label="buttonText"
    v-bind:class="customClass"
  >
    {{ buttonText }}
  </button>
</template>

<style lang="scss">
@use '../assets/main.scss' as a;

button {
  font-size: a.rem(18);
  background-color: a.$tidyBlue;
  border: 3px solid a.$tidyBlue;
  padding: 8px 20px;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in oklab, a.$tidyBlue 90%, black);
    border: 3px solid color-mix(in oklab, a.$tidyBlue 90%, black);

    color: white;
  }
}
</style>
