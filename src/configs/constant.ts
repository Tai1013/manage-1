import { $t } from '@/i18n'

export const LOCALE_LIST = [
  { value: 'zh-tw', label: '繁體中文' },
  { value: 'en', label: '英語' }
] as const

export const TIMEZONE_LIST = [
  { value: 'Asia/Taipei', label: $t('timezone.台北時間') },
  { value: 'America/New_York', label: $t('timezone.紐約時間') }
] as const

export const MENU_LIST = [
  {
    title: '操作記錄', name: 'operate', icon: 'Operation',
    child: [
      { title: '操作記錄', name: 'operate-record', path: '/operate/operate-record' }
    ]
  }
] as const

export const ACTION_LIST = [
  { value: 'read', label: '查看' },
  { value: 'create', label: '新增' },
  { value: 'detail', label: '詳情' },
  { value: 'update', label: '編輯' },
  { value: 'delete', label: '刪除' }
] as const
