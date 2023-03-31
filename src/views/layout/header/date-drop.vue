<template lang="pug">
mrc-dropdown.date-drop(
  :label="dateTime"
  :options="timezoneList"
  size="small"
  @command="commandHandler"
)
</template>

<script setup lang="ts">
import { MrcDropdown } from '@/components'
import { useDateTime } from '@/composables'

const { currentDateTime, timezoneList, changeTimeZone } = useDateTime()
const { dateTime } = currentDateTime()

const commandHandler = (timezone: string) => {
  changeTimeZone(timezone)
}
</script>

<script lang="ts">
export default { name: 'DateDropComp' }
</script>
