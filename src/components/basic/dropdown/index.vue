<template lang="pug">
el-dropdown(
  v-bind="$attrs"
  :trigger="trigger"
  @command="commandHandler"
  :size="size"
)
  .label(:class="size")
    slot(name="label") {{ label ?? $t('下拉菜單') }}
    mrc-icon.label-dropdown-icon(v-if="arrowDownShow" icon="ArrowDown")

  template(#dropdown)
    el-dropdown-menu
      el-dropdown-item(
        v-for="option in options"
        :key="option.value"
        :command="option.value"
        :disabled="option.disabled"
        :divided="option.divided"
      )
        el-avatar.dropdown-avatar(
          v-if="option.image"
          :src="option.image"
          :size="size === 'small' ? 12 : 14")
        mrc-icon(v-if="option.icon" :icon="option.icon")
        span {{ option.label }}
</template>

<script setup lang="ts">
import type { DropOption } from './types'
import type { PropType } from 'vue'
import type { ComponentSize, TooltipTriggerType } from 'element-plus'
import { ref } from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar } from 'element-plus'
import { MrcIcon } from '@/components/basic'

const props = defineProps({
  label: {
    type: String,
    default: undefined
  },
  options: {
    type: Array as PropType<DropOption[] | Readonly<DropOption[]>>,
    required: true
  },
  trigger: {
    type: String as PropType<TooltipTriggerType>,
    default: 'click'
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: ''
  },
  arrowDownShow: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['command'])

const commandHandler = (command: string | number) => {
  emit('command', command)
}
</script>

<script lang="ts">
export default {
  name: 'MrcDropdown'
}
</script>

<style scoped lang="scss">
.el-dropdown {
  .el-tooltip__trigger {
    outline: none;
  }
  .label {
    display: flex;
    align-items: center;
    cursor: pointer;
    .label-dropdown-icon {
      padding-left: 5px;
    }
    &.small {
      font-size: 12px;
    }
  }
}
.dropdown-avatar {
  margin-right: 5px;
}
</style>
