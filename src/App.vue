<script setup>
import { RouterView } from 'vue-router'
import AppDisplayWrapper from './components/AppDisplayWrapper.vue'

import { ref } from 'vue'
import { computed } from 'vue'

let userInfoCollected = ref(true)

const dayRate = 600

const services = ref([
  {
    id: 0,
    name: 'Logo Design',
    time: 3,
    qty: 1,
    qtyChangable: false,
    info: 'Following an initial meeting to discuss your needs, we’ll present a mood board to guide the design direction. You’ll receive three initial logo concepts, with the opportunity for two rounds of adjustments on your chosen design.',
    package: '',
    checked: false,
  },
  {
    id: 1,
    name: 'Packaging Design',
    time: 3,
    qty: 1,
    qtyChangable: false,
    info: 'We’ll develop three packaging design concepts based on your requirements. You’ll have the chance to choose one and refine it with two additional rounds of amends.',
    package: '',
    checked: false,
  },

  {
    id: 2,
    name: 'Supply Artwork',
    time: 0.5,
    qty: 3,
    qtyChangable: true,
    info: 'Provision of print-ready artwork in PDF format, optimized for commercial printing. This service encompasses the integration of essential details like nutritional information, ingredients, and barcodes.',
    package: '',
    checked: false,
  },

  {
    id: 3,
    name: 'Brand Workshop',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'A thorough, introductory session to delve into your business’s core, conducted in-person or remotely. This foundational workshop is designed to inform and guide the subsequent phases of your branding journey.',
    package: '',
    checked: false,
  },

  {
    id: 4,
    name: 'Competitor Look and Feel Analysis',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'A comprehensive examination of aesthetic trends and visual dynamics within your category. Insights garnered here will pinpoint opportunities and influence the creative direction of your brand’s visual identity.',
    package: '',
    checked: false,
  },

  {
    id: 5,
    name: 'Basic Brand Strategy',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'Crafting of foundational brand elements, including purpose and mission statements, unique selling propositions, and brand personality.',
    package: '',
    checked: false,
  },
  {
    id: 6,
    name: 'Full Competitor Analysis',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'An analysis covering both direct and indirect competitors. This includes assessments of social media presence, sales channels, target demographics, unique selling propositions, market positioning, and evaluation of brand strengths and weaknesses.',
    package: '',
    checked: false,
  },
  {
    id: 7,
    name: 'Product Visuals',
    time: 1,
    qty: 3,
    qtyChangable: true,
    info: 'Creation of high-resolution, 3D e-commerce visuals for each product variant, showcased against a neutral backdrop.',
    package: '',
    checked: false,
  },
  {
    id: 8,
    name: 'Full Brand Strategy',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'An extension of the Basic Brand Strategy, including the development of brand values, detailed customer profiles, and the crafting of a compelling brand story.',
    package: '',
    checked: false,
  },
  {
    id: 9,
    name: 'Brand Naming',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'Generation of up to five potential brand names, complete with preliminary checks for trademark and URL availability.',
    package: '',
    checked: false,
  },
  {
    id: 10,
    name: 'Product Photography',
    time: 1,
    qty: 3,
    qtyChangable: true,
    info: 'High-quality, contextual photographs for each product variant, capturing the essence of your products within a scene.',
    package: '',
    checked: false,
  },
  {
    id: 11,
    name: 'Brand Naming',
    time: 1,
    qty: 3,
    qtyChangable: false,
    info: 'Generation of up to five potential brand names, complete with preliminary checks for trademark and URL availability.',
    package: '',
    checked: false,
  },
  {
    id: 12,
    name: 'Print Project Management',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'Leverage our extensive industry experience as we procure competitive printing quotes on your behalf and oversee the production process with suppliers, ensuring optimal outcomes. Note: This does not include the actual costs of printing.',
    package: '',
    checked: false,
  },

  {
    id: 13,
    name: 'Retailer Pitch Deck Creation',
    time: 1,
    qty: 1,
    qtyChangable: false,
    info: 'Design and development of a persuasive presentation tailored for retail buyers, effectively communicating your brand’s story and value.',
    package: '',
    checked: false,
  },
])

const total = computed(() => {
  let tempTotal = 0
  services.value.forEach(item => {
    if (item.checked) tempTotal += item.time * item.qty * dayRate
  })
  return tempTotal
})
</script>

<template>
  <header>
    <div class="logo">Tidy</div>
  </header>

  <AppDisplayWrapper>
    <RouterView
      :services="services"
      :total="total"
      :userInfoCollected="userInfoCollected"
    />
  </AppDisplayWrapper>
</template>

<style scoped>
.logo {
  font-family: 'Nexa-XBold';
  font-size: 55px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
