<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:39:51
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 16:04:54
 * @Description: 
-->
<template>
  <t-layout :class="`${prefix}-layout`">
    <t-content :class="`${prefix}-content-layout`">
      <l-content />
    </t-content>
  </t-layout>
</template>

<script setup>
import { prefix } from '@/config/global';

import LContent from './Content.vue';

</script>

<style lang="scss">
@import url("@/assets/layout.scss");
</style>