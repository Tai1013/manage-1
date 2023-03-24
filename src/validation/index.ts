import { RuleItem } from 'async-validator'
import { t } from '@/i18n'

export const required: RuleItem = { required: true, message: t('validate.必填') }
export const range = (min: number, max: number): RuleItem => ({ min, max, message: t('validate.僅限{min}到{max}碼', { min, max }) })
export const email: RuleItem = { type: 'email', message: t('validate.格式有誤') }
