<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:08:31
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:59:11
 * @Description: 
-->
<template>
  <div>
    <XiphaOrbment></XiphaOrbment>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import XiphaOrbment from "../components/XiphaOrbment.vue";

const formData = reactive({
  layout: "inline",
  name: "",
  password: "",
});

</script>
<style scoped lang="scss"></style>
