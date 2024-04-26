<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  tooltipContent: {
    type: String,
    required: true,
  },
})

let isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <span
    v-on:mouseover="toggleVisibility"
    v-on:mouseleave="toggleVisibility"
    class="material-symbols-outlined tooltip-icon"
  >
    info
  </span>

  <div v-if="isVisible">
    <div class="tooltip">
      <p>{{ tooltipContent }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

.tooltip-icon {
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: a.$tidyBlue;
  }
}

.tooltip {
  /* display: none; */
  position: absolute;
  left: 30px;
  top: -30px;
  width: 100%;
  background-color: a.$tidyBlue;
  z-index: 10;
  padding: 15px;
  color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
</style>
