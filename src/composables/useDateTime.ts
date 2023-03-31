import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { ref, onMounted, onUnmounted } from 'vue'
import { TIMEZONE_LIST } from '@/configs/constant'
import { t } from '@/i18n'

type DateType = string | number | dayjs.Dayjs | Date | null | undefined

dayjs.extend(utc)
dayjs.extend(timezone)

const timeInterval = ref()

export const useDateTime = () => {
  const currentTZ = ref(dayjs.tz.guess())
  const timezoneList = ref<GlobalApp.Option[]>(TIMEZONE_LIST.map(zone => ({
    value: zone.value,
    label: t(`timezone.${zone.label}`) + dayjs().tz(zone.value).format(' (ZZ)')
  })))

  const getDateTime = ({ date, timezoon, format = 'YYYY-MM-DD HH:mm:ss' }:{ date?:DateType, timezoon?:string, format?:string } = {}) => {
    return dayjs(date).tz(timezoon).format(format)
  }

  const getUtcTime = (date?:DateType) => dayjs(date).utc().format()

  const getDateTimeRange = (value = 0, unit?: dayjs.ManipulateType) => {
    const startTime = dayjs().hour(0).minute(0).second(0)
    const endTime = dayjs().hour(23).minute(59).second(59)
    return [dayjs(startTime).subtract(value, unit).format(), dayjs(endTime).format()]
  }

  const checkDateTimeRange = (date:DateType, range: string[] | undefined | null) => {
    if (!range) return true
    if ([undefined, null, ''].includes(range as unknown as string)) return true
    if (range.length !== 2) return true
    return dayjs(date).isAfter(dayjs(range[0])) && dayjs(date).isBefore(dayjs(range[1]))
  }

  const getDateTimeSort = ({ a, b, sort = 'ascending' }: { a?: DateType, b?:DateType, sort?: 'ascending' | 'descending' }) => {
    if (dayjs(a).isSame(dayjs(b))) return 0
    if (dayjs(a).isBefore(dayjs(b))) return sort === 'descending' ? 1 : -1
    if (dayjs(a).isAfter(dayjs(b))) return sort === 'descending' ? -1 : 1
    return 0
  }

  const currentDateTime = () => {
    const dateTime = ref(getDateTime({ timezoon:currentTZ.value, format:'YYYY-MM-DD HH:mm:ss (ZZ)' }))

    onMounted(() => {
      timeInterval.value = setInterval(() => {
        dateTime.value = getDateTime({ timezoon:currentTZ.value, format:'YYYY-MM-DD HH:mm:ss (ZZ)' })
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(timeInterval.value)
    })

    return {
      dateTime
    }
  }

  const changeTimeZone = (tz: string) => {
    const { dateTime } = currentDateTime()
    currentTZ.value = tz
    dateTime.value = getDateTime({ timezoon:tz, format:'YYYY-MM-DD HH:mm:ss (ZZ)' })
  }

  return {
    timezoneList,

    currentDateTime,
    getUtcTime,
    getDateTime,
    getDateTimeSort,
    getDateTimeRange,
    checkDateTimeRange,
    changeTimeZone
  }
}
