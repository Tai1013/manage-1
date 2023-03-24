import errorCode from './error-code.json'
import { t } from '@/i18n'

type ErrorCode = Record<string, string>

export const errorMessageFormatter = (code: string | undefined) => {
  if (!code) return t('錯誤')
  const errorCodeData: ErrorCode = errorCode
  if (errorCodeData[code]) return t(`error.${errorCodeData[code]}`)
  return code
}
