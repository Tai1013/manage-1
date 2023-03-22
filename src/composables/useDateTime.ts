import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { ref, onMounted, onUnmounted } from 'vue'
import { TIMEZONE_LIST } from '@/configs/constant'

dayjs.extend(utc)
dayjs.extend(timezone)

const timeInterval = ref()
const getDateTime = (tz: string) => {
  return dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss (ZZ)')
}

export const getUtcTime = () => dayjs.utc().format()

export const useDateTime = () => {
  const currentTZ = ref(dayjs.tz.guess())
  const currentTime = ref(getDateTime(currentTZ.value))
  const timezoneList = ref<GlobalApp.Option[]>([])

  timezoneList.value = TIMEZONE_LIST.map(zone => ({
    value: zone.value,
    label: zone.label + dayjs().tz(zone.value).format(' (ZZ)')
  }))

  const changeTimeZone = (tz: string) => {
    currentTZ.value = tz
    currentTime.value = getDateTime(tz)
  }

  onMounted(() => {
    timeInterval.value = setInterval(() => {
      currentTime.value = getDateTime(currentTZ.value)
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timeInterval.value)
  })

  return {
    currentTime,
    timezoneList,
    changeTimeZone
  }
}
