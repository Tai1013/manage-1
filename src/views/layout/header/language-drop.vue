<template lang="pug">
mrc-dropdown.anguage-drop(
  size="small"
  :options="localList"
  :arrow-down-show="false"
  @command="commandHandler"
)
  template(#label)
    el-avatar(
      @error="errorHandler"
      :src="currentFlags"
      :size="16"
    )
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElAvatar } from 'element-plus'
import { MrcDropdown } from '@/components'
import { LOCALE_LIST } from '@/configs/constant'
import { getPathFile } from '@/helper'
import { useLanguage } from '@/i18n'

const { currentFlags, changeLocale } = useLanguage()

const localList = reactive(LOCALE_LIST.map(list => ({
  ...list,
  label: list.label,
  image: getPathFile(`@/i18n/flags/${list.value}.png`)
})))

const errorHandler = () => true
const commandHandler = (locale: string) => {
  changeLocale(locale)
}
</script>

<script lang="ts">
export default { name: 'LanguageDropComp' }
</script>
