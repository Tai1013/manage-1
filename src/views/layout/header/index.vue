<template lang="pug">
.header-top
  .between
    //- language-drop-comp
  .between
    //- date-drop-comp
.header-content
  .between
  .between
    //- user-drop-comp
</template>

<script setup lang="ts">
import DateDropComp from './date-drop.vue'
import LanguageDropComp from './language-drop.vue'
import UserDropComp from './user-drop.vue'
</script>

<script lang="ts">
export default {
  name: 'HeaderComp'
}
</script>

<style scoped lang="scss">
.header-top {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .85rem;
  height: 30px;
  background-color: #F0F2F5;
  .between {
    display: flex;
    align-items: center;
  }
}
.header-content {
  padding: 0 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .between {
    display: flex;
    align-items: center;
  }
}
</style>
