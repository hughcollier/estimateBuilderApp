<script setup>
import { defineProps } from 'vue'
import Tooltip from '../components/Tooltip.vue'
const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul>
    <li v-for="service in services" v-bind:key="service.id">
      <Tooltip :tooltipContent="service.info" />

      <input type="checkbox" v-bind:id="service.id" v-model="service.checked" />
      <label v-bind:for="service.id">{{ service.name }} </label>

      <span v-if="service.qtyChangable">
        <span class="times">&nbsp;x</span>
        <input type="number" id="" name="" v-model="service.qty" />
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

ul {
  display: grid;
  margin-top: 50px;

  @include a.mq(medium) {
    grid-template-columns: 1fr 1fr;
  }

  @include a.mq(large) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  li {
    margin-bottom: 15px;
    list-style: none;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .times {
    font-size: a.rem(26);
    opacity: 0.4;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    accent-color: a.$tidyBlue;
  }

  input[type='number'] {
    width: 50px;
    margin-left: 10px;
  }
}
</style>
