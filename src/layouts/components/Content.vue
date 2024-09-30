<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:42:27
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:15:54
 * @Description: 
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>

</script>
<style lang="less" scoped></style>
