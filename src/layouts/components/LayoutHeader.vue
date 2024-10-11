<template>
  <div class="layout-header">
    <div class="header-title">导力器回路搭配模拟器</div>
    <div class="header-version">
      <t-select label="选择版本" v-model="data.version" @blur="onChangeVersion">
        <t-option key="kai" label="界之轨迹" value="kai" disabled />
        <t-option key="kurotwo" label="黎之轨迹2" value="kurotwo" />
        <t-option key="kuro" label="黎之轨迹" value="kuro" disabled />
      </t-select>
    </div>
    <div class="header-auto">
      <t-switch v-model="slotChecked" size="large" @change="onChangeAuto">
        <template #label="slotProps">{{ slotProps.value ? '自动配装' : '手动配装' }}</template>
      </t-switch>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from "vue-router";
import { MessagePlugin } from 'tdesign-vue-next';

const router = useRouter();

const slotChecked = ref(true);

const data = reactive({
  version: "kurotwo"
})

const onChangeVersion = (ctx) => {
  router.push("/kiseki/" + data.version);
};

const onChangeAuto = () => {
  MessagePlugin.info('施工中，尽请期待');
}

</script>

<style lang="scss" scoped>
// :deep(.t-switch) {
//   background-color: #FF6935;
// }

// :deep(.t-switch:hover) {
//   background-color: #FF6935 !important;
// }

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
    left: 15px;
  }

  .header-auto {
    position: absolute;
    right: 15px;
  }
}
</style>
