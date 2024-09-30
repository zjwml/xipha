<template>
  <div class="layout-header">
    <div class="header-title">导力器回路搭配模拟器</div>
    <div class="header-version">
      <t-select label="选择版本" value="kai">
        <t-option key="kai" label="界之轨迹" value="kai" />
      </t-select>
    </div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  height: 100%;

  justify-content: center;
  align-items: center;

  .header-title {
    font-size: 32px;
    font-weight: bold;
  }

  .header-version {
    position: absolute;
    right: 20px;
  }
}
</style>
