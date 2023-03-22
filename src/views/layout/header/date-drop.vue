<template lang="pug">
mrc-dropdown.date-drop(
  :label="currentTime"
  :options="timezoneList"
  size="small"
  @command="commandHandler"
)
</template>

<script setup lang="ts">
import { MrcDropdown } from '@/components/basic'
import { useDateTime } from '@/composables'

const { currentTime, timezoneList, changeTimeZone } = useDateTime()
const commandHandler = (timezone: string) => {
  changeTimeZone(timezone)
}
</script>

<script lang="ts">
export default {
  name: 'DateDropComp'
}
</script>
