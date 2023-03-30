export const LOCALE_LIST = [
  { value: 'zh-tw', label: '繁體中文' },
  { value: 'en', label: '英語' }
] as const

export const TIMEZONE_LIST = [
  { value: 'Asia/Taipei', label: '台北時間' },
  { value: 'America/New_York', label: '紐約時間' }
] as const

export const MENU_LIST = [
  {
    title: '操作記錄', name: 'operate', icon: 'Operation',
    child: [
      { title: '操作記錄', name: 'operate-record', path: '/operate/operate-record', operate: false }
    ]
  }
] as const

export const ACTION_LIST = [
  { value: 'login', label: '登入', operate: true },
  { value: 'read', label: '查看', operate: false },
  { value: 'create', label: '新增', operate: false },
  { value: 'detail', label: '詳情', operate: false },
  { value: 'update', label: '編輯', operate: false },
  { value: 'delete', label: '刪除', operate: false }
] as const
const action = ACTION_LIST.map(list => list.value)
export type ApiAction = typeof action[number]

export const PLATFORM_LIST = [
  { value: 'manage', label: '管理後台' }
] as const
