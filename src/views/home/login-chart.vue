<template lang="pug">
doughnut(
  :data="data"
  :loading="isLoading"
)
</template>

<script setup lang="ts">
import type { OperateRecord } from '@/firebase/operateServer'
import { ref, computed, onMounted } from 'vue'
import { Doughnut } from '@/components/chartjs'
import { getOperateRecord } from '@/firebase/operateServer'
import { useDateTime, useLoading } from '@/composables'

const { getDateTimeRange } = useDateTime()
const { isLoading, load, unload } = useLoading()

const anonymousSum = computed(() => operateData.value.filter(data => data.account === '演示帳號').length)
const formalSum = computed(() => operateData.value.length - anonymousSum.value)

const operateData = ref<OperateRecord[]>([])

const data = computed(() => ({
  labels: ['演示帳號', '正式帳號'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651'],
      data: [anonymousSum.value, formalSum.value]
    }
  ]
}))

onMounted(async () => {
  load()
  getOperateRecord({
    operateType: 'login',
    operateTime: getDateTimeRange(3, 'month')
  })
    .then(result => operateData.value = result.data)
    .finally(() => unload())
})
</script>
