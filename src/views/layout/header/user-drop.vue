<template lang="pug">
mrc-dropdown.date-drop(
  :options="userDropList"
  :arrow-down-show="false"
  @command="commandHandler"
)
  template(#label)
    el-avatar.user-avatar(
      :class="{ 'isAnonymous': currentUser?.isAnonymous }"
      @error="errorHandler"
      :icon="Avatar"
      :size="28"
    )
</template>

<script setup lang="ts">
import type { DropOption } from '@/components'
import { reactive, computed } from 'vue'
import { ElAvatar } from 'element-plus'
import { Avatar } from '@element-plus/icons-vue'
import { MrcDropdown } from '@/components'
import { currentUser, signOutAuth } from '@/firebase/auth'
import { t } from '@/i18n'

const displayName = computed(() => {
  if (currentUser.value) {
    if (currentUser.value.isAnonymous) return t('演示帳號')
    return currentUser.value.displayName ? currentUser.value.displayName : ''
  }
  return ''
})

const userDropList = reactive<DropOption[]>([
  {
    label: displayName.value,
    value: 'displayName',
    icon: 'UserFilled'
  },
  {
    label: t('登出'),
    value: 'signOut',
    icon: 'SwitchButton'
  }
])

const errorHandler = () => true

const commandHandler = (type: string) => {
  switch (type) {
    case 'signOut':
      signOutAuth()
      break;
  }
}
</script>

<script lang="ts">
export default { name: 'UserDropComp' }
</script>

<style scoped lang="scss">
.user-avatar:not(.isAnonymous) {
  background-color: var(--el-color-warning-light-3);
}
</style>
