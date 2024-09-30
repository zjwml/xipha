<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:35:08
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:14:41
 * @Description: 
-->
<template>
  <div>
    <t-layout>
      <t-header>
        <layout-header />
      </t-header>
      <t-layout>
        <layout-content />
      </t-layout>
    </t-layout>
  </div>
</template>
<script setup>

import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';

</script>
<style scoped lang='scss'></style>
