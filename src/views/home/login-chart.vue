<template lang="pug">
doughnut(
  :data="data"
)
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Doughnut } from '@/components/chartjs'
import { getOperateRecord } from '@/firebase/operateServer'
import { setManipulate, getDateTime } from '@/composables/useDateTime'

type OperateRecord = {
  id: string
  ip: string
  detail: string
  platform: string
  account: string
  page: string
  operateType: string
  operateTime: string[]
}

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
  console.log(getDateTime())
    getOperateRecord({
      operateType: 'login'
    })
    .then(result => operateData.value = result.data)
})
</script>
