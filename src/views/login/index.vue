<template lang="pug">
.login(v-loading="isLoading")
  .login-form
    h1.login-title Sign in
    mrc-form(
      :form="form"
      :fields="fields"
      buttons="submit"
      @submit="submitHandler()"
    )
      template(#field:remember)
        el-checkbox(
          v-model="form.remember"
          :disabled="!isFormal"
          :label="$t('記住我的電子信箱')"
        )
      template(#button:submit) {{ $t('登入') }}
    .version {{ version }}
  .mode-switch
    el-switch(
      v-model="isFormal"
      :active-text="$t('正式')"
      :inactive-text="$t('演示')"
    )
</template>

<script setup lang="ts">
import { MrcForm } from '@/components/basic'
import { ElCheckbox, ElSwitch } from 'element-plus'
import { useForm } from './useForm'

const { isFormal, form, fields, isLoading, submitHandler } = useForm()

const version = import.meta.env.VITE_APP_VERSION
</script>

<style lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-image: url(./bg.svg);
  background-size: cover;
  label {
    color: #ffffff;
  }
  .el-switch__label:not(.is-active) {
    color: #ffffff;
  }
}
.login-form {
  max-width: 280px;
  width: 90%;
  .login-title {
    text-align: center;
  }
  .form-button button {
    width: 100%;
  }
}
.version {
  margin-top: 8px;
  font-size: 14px;
  text-align: right;
}
.mode-switch {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
