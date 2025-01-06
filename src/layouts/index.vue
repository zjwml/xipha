<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:35:08
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:14:41
 * @Description: 
-->
<template>
  <div class="container">
    <t-layout>
      <t-header>
        <layout-header />
      </t-header>
      <t-layout>
        <layout-content />
      </t-layout>
    </t-layout>

    <div class="image-container">
      <img src="https://cdn.trails-game.com/wp-content/uploads/2023/01/dl_kiseki_r5_nenga2023_w.jpg">
    </div>
  </div>
</template>
<script setup>

import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';

</script>
<style scoped lang='scss'>
:deep(.t-layout) {
  background: none;
}

.container {
  position: relative;
  height: 100%;
  width: 100%;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;


  img {
    width: 100%;
    object-fit: contain;
    opacity: 0.8;
  }
}
</style>
