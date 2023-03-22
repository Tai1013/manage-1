import type { Language } from 'element-plus/es/locale'
import { i18n } from './install'
import { ref, computed, watch } from 'vue'

export const $t = i18n.global.t

const getElementLocale = async (locale: string) => {
  return (await import(`../../node_modules/element-plus/es/locale/lang/${locale}.mjs`)).default
}

const isSpaceLanguage = ['en']

export const useLanguage = () => {
  const spaceRequired = computed(() => {
    if (isSpaceLanguage.includes(language.value)) return true
    return false
  })
  const currentFlags = computed(() => new URL(`./flags/${language.value}.png`, import.meta.url).href)

  const elementLocale = ref<Language | undefined>(undefined)
  const language = ref<string>(localStorage.getItem('language') ?? import.meta.env.VITE_APP_LANGUAGE)
  i18n.global.locale.value = localStorage.getItem('language') ?? import.meta.env.VITE_APP_LANGUAGE
  const changeLocale = (locale: string) => {
    language.value = locale
    i18n.global.locale.value = locale
    localStorage.setItem('language', locale)
    document.location.reload()
  }

  watch(() => language.value, async () => {
    elementLocale.value = await getElementLocale(language.value)
  }, { immediate: true })

  return {
    spaceRequired,
    language,
    currentFlags,
    elementLocale,

    changeLocale
  }
}
