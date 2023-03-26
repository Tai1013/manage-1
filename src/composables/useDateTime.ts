import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { ref, onMounted, onUnmounted } from 'vue'
import { TIMEZONE_LIST } from '@/configs/constant'
import { useI18n } from 'vue-i18n'

type DateType = string | number | dayjs.Dayjs | Date | null | undefined

dayjs.extend(utc)
dayjs.extend(timezone)

const timeInterval = ref()

export const getDateTime = ({ date, timezoon, format = 'YYYY-MM-DD HH:mm:ss' }: { date?: DateType, timezoon?: string, format?: string }) => {
  return dayjs(date).tz(timezoon).format(format)
}

export const getUtcTime = () => dayjs.utc().format()

export const setDayAdd = ({ value, unit, date }: { value: number, unit?: dayjs.ManipulateType | undefined, date?:DateType }): dayjs.Dayjs => {
  return dayjs(date).add(value, unit)
}

export const isDayComparison = ({ a, b, sort = 'ascending' }: { a?: DateType, b?:DateType, sort?: 'ascending' | 'descending' }) => {
  if (dayjs(a).isSame(dayjs(b))) return 0
  if (dayjs(a).isBefore(dayjs(b))) return sort === 'descending' ? 1 : -1
  if (dayjs(a).isAfter(dayjs(b))) return sort === 'descending' ? -1 : 1
  return 0
}

export const useDateTime = () => {
  const { t } = useI18n()

  const currentTZ = ref(dayjs.tz.guess())
  const currentTime = ref(getDateTime({ timezoon:currentTZ.value, format:'YYYY-MM-DD HH:mm:ss (ZZ)' }))
  const timezoneList = ref<GlobalApp.Option[]>([])

  timezoneList.value = TIMEZONE_LIST.map(zone => ({
    value: zone.value,
    label: t(`timezone.${zone.label}`) + dayjs().tz(zone.value).format(' (ZZ)')
  }))

  const changeTimeZone = (tz: string) => {
    currentTZ.value = tz
    currentTime.value = getDateTime({ timezoon:tz, format:'YYYY-MM-DD HH:mm:ss (ZZ)' })
  }

  onMounted(() => {
    timeInterval.value = setInterval(() => {
      currentTime.value = getDateTime({ timezoon:currentTZ.value, format:'YYYY-MM-DD HH:mm:ss (ZZ)' })
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
