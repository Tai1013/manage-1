import type { FormField } from '@/components'
import { ref, reactive, computed, watch } from 'vue'
import { useLoading, useMessage, useVueRouter } from '@/composables'
import { required, email } from '@/validation'
import { postSignInAnonymously, postSignInAuth } from '@/firebase/auth'
import { t } from '@/i18n'

export const useForm = () => {
  const { load, unload, isLoading } = useLoading()
  const { route } = useVueRouter()
  const { $messageBox } = useMessage()

  const rememberAccount = localStorage.getItem(route.origin) ?? ''

  const isFormal = ref(true)
  const form = reactive({
    email: rememberAccount,
    password: '',
    remember: rememberAccount ? true : false
  })

  const fields = computed((): FormField[] => [
    {
      prop: 'email',
      label: '電子信箱',
      rules: (() => {
        if (isFormal.value) return [
          required,
          email
        ]
        return []
      })(),
      placeholder: !isFormal.value ? '演示無需輸入' : '',
      disabled: !isFormal.value
    },
    {
      prop: 'password',
      type: 'password',
      label: '密碼',
      rules: isFormal.value ? required : [],
      placeholder: !isFormal.value ? '演示無需輸入' : '',
      disabled: !isFormal.value
    },
    {
      prop: 'remember'
    }
  ])

  const submitHandler = async () => {
    load()
    if (isFormal.value) {
      if (form.remember) localStorage.setItem(route.origin, form.email)
      else localStorage.removeItem(route.origin)
      await postSignInAuth(form)
    } else {
      const confirm = await $messageBox.confirm(t('演示站僅供查看'), t('提示'), {
        type: 'warning',
        confirmButtonText: t('確認'),
        cancelButtonText: t('取消')
      })
        .then(() => true)
        .catch(() => false)

      if (confirm) await postSignInAnonymously()
    }
    unload()
  }

  watch(() => isFormal.value, () => {
    if (isFormal.value && rememberAccount) {
      form.email = rememberAccount
      form.password = ''
      form.remember = rememberAccount ? true : false
    } else {
      form.email = ''
      form.password = ''
    }
  })

  return {
    isFormal,
    form,
    fields,
    isLoading,

    submitHandler
  }
}
