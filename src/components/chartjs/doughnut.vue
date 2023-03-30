<template lang="pug">
doughnut(
  :data="data"
  :options="options"
)
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ChartData, ChartOptions } from 'chart.js';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

defineProps({
  data: {
    type: Object as PropType<ChartData<"doughnut", number[], unknown>>,
    required: true
  },
  options: {
    type: Object as PropType<ChartOptions>,
    default: () => ({
      responsive: true,
      aspectRatio: 1
    })
  }
})
</script>

<script lang="ts">
export default { name: 'ChartDoughnut' }
</script>
