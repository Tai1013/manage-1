import type { FormField } from '@/components/basic'
import { ref, reactive, computed } from 'vue'
import { useLoading, useMessage, useVueRouter } from '@/composables'
import { required, email } from '@/validation'
import { postSignInAnonymously, postSignInAuth } from '@/firebase/auth'
import { $t } from '@/i18n'

export const useForm = () => {
    const { load, unload, isLoading } = useLoading()
    const { route, router } = useVueRouter()
    const { $message, $messageBox } = useMessage()

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
        // await postSignInAuth(form)
        router.push({ name: 'home' })
      } else {
        const confirm = await $messageBox.confirm($t('演示站僅供查看'), $t('提示'), {
          type: 'warning',
          confirmButtonText: $t('確認'),
          cancelButtonText: $t('取消')
        })
          .then(() => true)
          .catch(() => false)

        if (confirm) router.push({ name: 'home' })
        // await postSignInAnonymously()
      }
      unload()
    }

    return {
      isFormal,
      form,
      fields,
      isLoading,

      submitHandler
    }
}
