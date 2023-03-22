import { $t } from '@/i18n'

export const LOCALE_LIST = [
  { value: 'zh-tw', label: '繁體中文' },
  { value: 'en', label: '英語' }
] as const

export const TIMEZONE_LIST = [
  { value: 'Asia/Taipei', label: $t('timezone.台北時間') },
  { value: 'America/New_York', label: $t('timezone.紐約時間') }
] as const
